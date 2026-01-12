"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        uid: userCred.user.uid,
        email: userCred.user.email,
      })
    );

    router.push("/profile");
  }

  return (
    <div className="page">
      <h1>Register to Purchase</h1>

      <form onSubmit={handleRegister} style={{ maxWidth: 400 }}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}
