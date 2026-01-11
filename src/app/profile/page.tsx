"use client";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="page">
      <h1>Your Account</h1>

      <ul>
        <li><Link href="/orders">My Orders</Link></li>
        <li><Link href="/payments">Payment Methods</Link></li>
        <li><Link href="/contact">Contact Support</Link></li>
      </ul>
    </div>
  );
}
