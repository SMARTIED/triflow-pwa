import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-container">
      <Image
        src="/logo.png"
        alt="TriFlow Logo"
        width={420}
        height={200}
        className="hero-logo"
        priority
      />

      <h1 className="welcome-title">
        Welcome to <strong>TriFlow Plumbing</strong>
      </h1>

      <p className="welcome-subtitle">
        Three minds. One powerful flow. Professional plumbing supplies delivered to your door.
      </p>

      <Link href="/shop" className="primary-btn">
        Shop Now
      </Link>
    </div>
  );
}
