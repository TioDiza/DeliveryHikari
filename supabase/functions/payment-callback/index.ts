import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

console.log("[payment-callback] Function starting up.");

serve(async (req) => {
  try {
    const payload = await req.json();
    console.log("[payment-callback] Received webhook payload:", payload);

    // In a real application, you would process the payload here.
    // For example, find the order by transaction ID and update its status to "paid".

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("[payment-callback] Error processing webhook:", error);
    return new Response(JSON.stringify({ error: "Failed to process webhook" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});