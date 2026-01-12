import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="app-header">
      <Link href="/" className="brand">
        <Image
          src="/logo.png"
          alt="TriFlow Plumbing Logo"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1>TriFlow</h1>
          <span>Three Minds. One Powerful Flow.</span>
        </div>
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/support">Support</Link>
      </nav>
      <div className="quick-help">
        <button onClick={() => setInput("delivery")}>🚚 Delivery</button>
        <button onClick={() => setInput("refund")}>💰 Refund</button>
        <button onClick={() => setInput("order")}>📦 Orders</button>
      </div>

    </header>
  );
}
