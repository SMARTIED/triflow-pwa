"use client";

import { useState } from "react";

export default function Header() {
  const [input, setInput] = useState("");

  return (
    <header>
      <nav>
        {/* your nav items */}
      </nav>

      <div className="quick-help">
        <button onClick={() => setInput("delivery")}>🚚 Delivery</button>
        <button onClick={() => setInput("refund")}>💰 Refund</button>
        <button onClick={() => setInput("order")}>📦 Orders</button>
      </div>

      {/* optional: show or use input */}
      {/* <p>{input}</p> */}
    </header>
  );
}
