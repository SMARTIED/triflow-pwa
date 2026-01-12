"use client";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="page">
      <h1>Reset Password</h1>

      {sent ? (
        <p>We have sent a reset link to your email.</p>
      ) : (
        <>
          <input
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn" onClick={() => setSent(true)}>
            Send reset link
          </button>
        </>
      )}
    </div>
  );
}
