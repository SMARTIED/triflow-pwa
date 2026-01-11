'use client';

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function reset() {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent.");
    } catch (err: any) {
      setMessage(err.message);
    }
  }

  return (
    <div className="page">
      <h1>Reset Password</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="btn" onClick={reset}>Send Reset Link</button>
      <p>{message}</p>
    </div>
  );
}
