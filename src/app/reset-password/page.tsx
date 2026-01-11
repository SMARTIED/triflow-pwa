'use client';

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

export const dynamic = "force-dynamic";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function reset() {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err: any) {
      setMessage(err.message);
    }
  }

  return (
    <div className="page">
      <h1>Reset Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="btn" onClick={reset}>
        Send Reset Link
      </button>
      <p>{message}</p>
    </div>
  );
}
