'use client';

import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      const { getAuth, sendPasswordResetEmail } = await import("firebase/auth");
      const { app } = await import("../../../firebase/firebaseConfig");

      const auth = getAuth(app);

      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent.");
    } catch (err: any) {
      setMessage(err.message || "Failed to send reset email");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Reset Password</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleReset}
        className="bg-blue-600 text-white p-2 w-full"
      >
        Send reset email
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
