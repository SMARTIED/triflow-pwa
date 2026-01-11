"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/register");
    }
  }, []);

  return (
    <div className="page">
      <h1>Checkout</h1>
      <p>Thank you for registering. Payment system coming next.</p>
    </div>
  );
}
