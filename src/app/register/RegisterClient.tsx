"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("register");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setError("");
    setLoading(true);

    try {
      const auth = getFirebaseAuth();

      if (mode === "register") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      router.push("/profile");
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <h1>{mode === "register" ? "Create Account" : "Login"}</h1>

      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Please wait..." : mode === "register" ? "Register" : "Login"}
      </button>

      <p onClick={() => setMode(mode === "register" ? "login" : "register")}>
        {mode === "register" ? "Already have an account? Login" : "Need an account? Register"}
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
