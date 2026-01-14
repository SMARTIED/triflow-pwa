"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleReset() {
    try {
      const auth = getFirebaseAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent");
    } catch {
      setMessage("Reset failed");
    }
  }

  return (
    <div className="auth-page">
      <h1>Reset Password</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <button onClick={handleReset}>Send reset link</button>

      {message && <p>{message}</p>}
    </div>
  );
}
