"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister() {
    setError("");
    try {
      const auth = getFirebaseAuth();
await createUserWithEmailAndPassword(auth, email, password);

      router.push("/profile");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  }

  return (
    <div className="auth-page">
      <h1>Create Account</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
