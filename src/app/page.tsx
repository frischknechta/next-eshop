import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Welcome to our shop!</div>
      <Link href="/shop">Start shopping</Link>
      <Link href="/about">About us</Link>
    </main>
  );
}
