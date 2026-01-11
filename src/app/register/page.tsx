"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  return (
    <div className="page">
      <h1>Register to Purchase</h1>

      <p>You must create an account to place orders.</p>

      <form style={{ marginTop: "2rem", maxWidth: 400 }}>
        <input placeholder="Full Name" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Password" type="password" required />

        <button className="primary-btn" style={{ marginTop: "1rem" }}>
          Create Account
        </button>
      </form>
    </div>
  );
}
