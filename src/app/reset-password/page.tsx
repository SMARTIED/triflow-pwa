"use client";

import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = async () => {
    try {
      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, email);
      setStatus("Password reset email sent. Check your inbox.");
    } catch (error: any) {
      setStatus(error.message);
    }
  };

  return (
    <div className="auth-page">
      <h1>Reset Password</h1>

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleReset}>Send reset link</button>

      {status && <p>{status}</p>}
    </div>
  );
}
