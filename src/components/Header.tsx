import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex h-12 bg-slate-500 justify-between items-center px-5">
      <Link href="/">
        <h1>My eShop</h1>
      </Link>
      <nav className="flex gap-5">
        <Link href="/shop">Shop</Link>
        <Link href="/about">About us</Link>
      </nav>
    </header>
  );
};
