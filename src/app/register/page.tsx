"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
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
    if (!auth) return;

    if (mode === "register") {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }

    localStorage.setItem("user", email);
    router.push("/shop");
  } catch (err: any) {
    console.error(err);
    setError(err.message || "Authentication failed");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="auth-page">
      <h1>{mode === "register" ? "Create Account" : "Login"}</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Please wait..." : mode === "register" ? "Register" : "Login"}
      </button>

      <p
        style={{ marginTop: "1rem", cursor: "pointer", opacity: 0.8 }}
        onClick={() =>
          setMode(mode === "register" ? "login" : "register")
        }
      >
        {mode === "register"
          ? "Already have an account? Login"
          : "Need an account? Register"}
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
