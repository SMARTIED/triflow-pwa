import Image from "next/image";

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <Image
          src="/logo.png"
          alt="TriFlow Plumbing Logo"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1>TriFlow Plumbing</h1>
          <span>Three Minds. One Powerful Flow.</span>
        </div>
      </div>
    </header>
  );
}
<nav>
  <a href="#home">Home</a>
  <a href="#shop">Shop</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
