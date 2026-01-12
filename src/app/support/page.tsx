"use client";

import { useState } from "react";

export default function SupportPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m TriFlow Support. How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    const botReply = getBotReply(input);

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  }

  function getBotReply(text: string) {
    const msg = text.toLowerCase();

    if (msg.includes("order")) return "You can view your orders in the Profile page.";
    if (msg.includes("delivery")) return "Delivery usually takes 2–4 working days.";
    if (msg.includes("refund")) return "Refunds are processed within 5 business days.";
    if (msg.includes("contact")) return "You can email support@triflow.co.za";

    return "I’m not sure — please email support@triflow.co.za";
  }

  return (
    <div className="support-page">
      <h1>TriFlow Support</h1>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={m.from}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
