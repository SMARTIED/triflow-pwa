"use client";

export default function ProfilePage() {
  return (
    <div className="page">
      <h1>Your Profile</h1>

      <div className="product">
        <strong>Name</strong>
        <span>Guest User</span>
      </div>

      <div className="product">
        <strong>Email</strong>
        <span>Not signed in</span>
      </div>

      <a className="btn" href="/reset-password">
        Reset Password
      </a>
    </div>
  );
}
