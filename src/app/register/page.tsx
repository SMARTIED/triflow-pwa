"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
 // adjust path if needed

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
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
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="page">
      <h1>Register to Purchase</h1>
      <p>You must create an account to place orders.</p>

      <form
        onSubmit={handleRegister}
        style={{ marginTop: "2rem", maxWidth: 400 }}
      >
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="primary-btn" style={{ marginTop: "1rem" }}>
          Create Account
        </button>
      </form>
    </div>
  );
}
