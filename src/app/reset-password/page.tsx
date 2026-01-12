"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const auth = getFirebaseAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email");
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <h1>Reset Password</h1>

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleReset} disabled={loading}>
        {loading ? "Sending..." : "Send reset link"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
