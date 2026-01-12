"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="page">
      <h1>Checkout</h1>

      <label>
        <input
          type="checkbox"
          onChange={(e) => setAccepted(e.target.checked)}
        />
        I accept the disclaimer
      </label>

      <button disabled={!accepted}>
        Proceed to Payment
      </button>
    </div>
  );
}
