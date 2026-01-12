import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        {/* LOGO + TEXT CLICKABLE */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="TriFlow Plumbing Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        <div>
          <h1>TriFlow Plumbing</h1>
          <span>Three Minds. One Powerful Flow.</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
