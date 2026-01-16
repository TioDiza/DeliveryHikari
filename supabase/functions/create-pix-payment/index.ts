import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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
    const { amount, clientData } = await req.json();
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
      headers: {
        'Content-Type': 'application/json',
      },
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

    return new Response(JSON.stringify({ 
      qrCode: responseData.paymentCodeBase64,
      transactionId: responseData.idTransaction,
      pixCopyPaste: responseData.paymentCode // Assumindo que a API retorna este campo
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