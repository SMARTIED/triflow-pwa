"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent");
    } catch (e) {
      setMessage("Reset failed");
    }
  };

  return (
    <div className="auth-page">
      <h1>Reset Password</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={reset}>Send reset link</button>

      {message && <p>{message}</p>}
    </div>
  );
}
