import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-container">
      <Image 
        src="/logo.png"
        alt="TriFlow Plumbing"
        width={300}
        height={160}
        priority
        className="hero-logo"
      />

      <h1 className="welcome-title">
        <strong>Welcome to TriFlow Plumbing</strong>
      </h1>

      <p className="welcome-subtitle">
        Your trusted online plumbing store for pipes, taps and more.
      </p>

      <Link href="/shop">
        <button className="primary-btn">Shop Now</button>
      </Link>
    </div>
  );
}
