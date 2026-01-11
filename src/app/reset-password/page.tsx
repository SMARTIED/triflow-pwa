"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("Password reset email sent.");
    } catch {
      setMsg("Failed to send reset email.");
    }
  };

  return (
    <div className="page">
      <h1>Reset Password</h1>
      <input
        type="email"
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={handleReset}>Send Reset</button>
      <p>{msg}</p>
    </div>
  );
}
