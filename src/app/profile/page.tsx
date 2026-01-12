"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (u) => {
      if (!u) router.push("/login");
      setUser(u);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>User ID:</strong> {user.uid}</p>

      <button
        onClick={() => {
          signOut(getAuth(app));
          router.push("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}
