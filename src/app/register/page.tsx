"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { auth } = await import("@/lib/firebase");
      const { createUserWithEmailAndPassword } = await import("firebase/auth");

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created");
      window.location.href = "/shop";
    } catch (err: any) {
      console.error(err);
      setError("Firebase auth failed");
    }
  };

  return (
    <div className="auth-page">
      <h1>Create Account</h1>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
