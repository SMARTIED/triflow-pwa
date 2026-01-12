"use client";

import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      const { auth } = await import("@/lib/firebase");
      const { sendPasswordResetEmail } = await import("firebase/auth");

      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent");
    } catch {
      setMessage("Reset failed");
    }
  };

  return (
    <div className="auth-page">
      <h1>Reset Password</h1>

      <input
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleReset}>Send reset link</button>

      {message && <p>{message}</p>}
    </div>
  );
}
