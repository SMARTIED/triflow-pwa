'use client';

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // This forces Firebase to only load in the browser
    if (typeof window === "undefined") return;
  }, []);

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
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="btn" onClick={reset}>Send Reset</button>
      <p>{message}</p>
    </div>
  );
}
