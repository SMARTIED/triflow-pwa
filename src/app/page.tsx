import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-container">
      <Image
        src="/logo-hero.png"
        alt="TriFlow Plumbing"
        width={420}
        height={420}
        priority
        className="hero-logo"
      />

      <p className="welcome-title">
        Welcome to <strong>TriFlow Plumbing</strong>
      </p>

      <p className="welcome-subtitle">
        Your trusted online plumbing store for pipes, taps and more.
      </p>

      <button className="primary-btn">
        Shop Now
      </button>
    </main>
  );
}
