"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/register");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  if (!user) return null;

  return (
    <div className="page">
      <h1>Your Profile</h1>

      <p><strong>Email:</strong> {user.email}</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          className="primary-btn"
          onClick={() => router.push("/shop")}
        >
          Go to Shop
        </button>

        <button
          className="secondary-btn"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/register");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
