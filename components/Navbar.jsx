import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="text-color-purple font-semibold">
        TOP STREAMING
      </Link>
      <Link href="/" className="text-gray-400 hover:text-white">
        GAMES
      </Link>
      <Link href="/" className="text-gray-400 hover:text-white">
        TEAMS
      </Link>
    </nav>
  );
}
