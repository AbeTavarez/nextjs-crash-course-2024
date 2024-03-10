import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between mx-auto p-8">
      <Link href="/" className="font-bold text-3xl">Home</Link>

      <div className="space-x-4 text-xl">
        <Link href="/members">Members</Link>
        <Link href="/members/new">Create</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
