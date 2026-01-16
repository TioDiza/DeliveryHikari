import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ROYAL_BANKING_API_URL = 'https://api.royalbanking.com.br/v1/gateway/';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, clientData, items, shippingFee } = await req.json();
    const apiKey = Deno.env.get('ROYAL_BANKING_API_KEY');

    if (!apiKey) {
      console.error('[create-pix-payment] ROYAL_BANKING_API_KEY secret is not set in Supabase.');
      return new Response(JSON.stringify({ error: 'Configuration error: API key is missing.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!clientData || !clientData.name || !clientData.document || !clientData.email) {
      return new Response(JSON.stringify({ error: 'Client data is missing or incomplete.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const callbackUrl = `${supabaseUrl}/functions/v1/payment-callback`;

    const requestBody = {
      "api-key": apiKey,
      amount: amount,
      client: clientData,
      callbackUrl: callbackUrl,
    };

    console.log('[create-pix-payment] Sending request to Royal Banking:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(ROYAL_BANKING_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();

    if (!response.ok || responseData.status !== 'success') {
      console.error('[create-pix-payment] Error from Royal Banking API:', responseData);
      return new Response(JSON.stringify({ error: responseData.message || 'Failed to create PIX payment.' }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    console.log('[create-pix-payment] Successfully created PIX payment:', responseData.idTransaction);

    // Salvar o pedido no banco de dados
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const orderPayload = {
      items: items,
      total_amount: amount,
      shipping_fee: shippingFee,
      transaction_id: responseData.idTransaction,
      status: 'pending_payment'
    };

    const { data: newOrder, error: insertError } = await supabaseAdmin
      .from('orders')
      .insert(orderPayload)
      .select('id')
      .single();

    if (insertError) {
      console.error('[create-pix-payment] Error creating order in DB:', insertError);
      return new Response(JSON.stringify({ error: 'Failed to save order.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      qrCodeBase64: responseData.qrCode,
      transactionId: responseData.idTransaction,
      pixCopyPaste: responseData.paymentCode,
      orderId: newOrder.id,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('[create-pix-payment] Internal server error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});