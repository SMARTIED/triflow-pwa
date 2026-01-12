"use client";

export default function CheckoutPage() {
  const merchantId = "10000100";     // PayFast sandbox
  const merchantKey = "46f0cd694581a";

  const amount = 120; // Later this comes from cart
  const itemName = "TriFlow Plumbing Order";

  const payfastUrl = "https://sandbox.payfast.co.za/eng/process";

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Total: <strong>R{amount}</strong></p>

      <form method="post" action={payfastUrl}>
        <input type="hidden" name="merchant_id" value={merchantId} />
        <input type="hidden" name="merchant_key" value={merchantKey} />
        <input type="hidden" name="amount" value={amount.toFixed(2)} />
        <input type="hidden" name="item_name" value={itemName} />
        <input type="hidden" name="return_url" value="https://triflow-pwa.vercel.app/success" />
        <input type="hidden" name="cancel_url" value="https://triflow-pwa.vercel.app/cart" />

        <button type="submit" className="pay-btn">
          Pay with PayFast
        </button>
      </form>
    </div>
  );
}
