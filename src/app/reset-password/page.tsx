"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const reset = async () => {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent");
  };

  return (
    <div className="page">
      <h1>Reset Password</h1>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
