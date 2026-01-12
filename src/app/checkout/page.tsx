"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/register");
    }
  }, []);

  const merchantId = "10000100"; // PayFast sandbox
  const merchantKey = "46f0cd694581a";
  const amount = 120;
  const itemName = "TriFlow Plumbing Order";

  return (
    <div className="page">
      <h1>Checkout</h1>
      <p>Total: <strong>R{amount}</strong></p>

      <form
        method="post"
        action="https://sandbox.payfast.co.za/eng/process"
      >
        <input type="hidden" name="merchant_id" value={merchantId} />
        <input type="hidden" name="merchant_key" value={merchantKey} />
        <input type="hidden" name="amount" value={amount.toFixed(2)} />
        <input type="hidden" name="item_name" value={itemName} />
        <input type="hidden" name="return_url" value="https://triflow-pwa.vercel.app/profile" />
        <input type="hidden" name="cancel_url" value="https://triflow-pwa.vercel.app/cart" />

        <button className="btn" type="submit">
          Pay with PayFast
        </button>
      </form>
    </div>
  );
}
