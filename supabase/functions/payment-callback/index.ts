import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

console.log("[payment-callback] Function starting up.");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log("[payment-callback] Received webhook payload:", payload);

    if (payload.idTransaction && payload.status === 'paid') {
      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      );

      const { data, error } = await supabaseAdmin
        .from('orders')
        .update({ status: 'received' })
        .eq('transaction_id', payload.idTransaction)
        .select('id');

      if (error) {
        console.error('[payment-callback] Error updating order status:', error);
        throw new Error('Failed to update order status');
      }

      if (data && data.length > 0) {
        console.log(`[payment-callback] Order ${data[0].id} status updated to 'received'.`);
      } else {
        console.warn(`[payment-callback] No order found for transaction_id: ${payload.idTransaction}`);
      }
    }

    // Retorna a resposta exata que a API da Royal Banking espera (HTTP 200 com o corpo JSON "200")
    return new Response(JSON.stringify(200), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("[payment-callback] Error processing webhook:", error);
    return new Response(JSON.stringify({ error: "Failed to process webhook" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});