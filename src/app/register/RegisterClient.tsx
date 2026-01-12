"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <h1>Create Account</h1>

      <input
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

      <button onClick={register}>Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
