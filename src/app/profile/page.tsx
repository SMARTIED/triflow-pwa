"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/register");
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="page">
      <h1>My Profile</h1>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <button onClick={() => router.push("/checkout")}>
            Proceed to Checkout
          </button>
          <button onClick={() => {
            localStorage.removeItem("user");
            router.push("/");
          }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
