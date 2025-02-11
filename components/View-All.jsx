import Link from "next/link";

export default function ViewAll() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">Streams of the day</h2>
      <Link
        href="/"
        className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
      >
        View all
      </Link>
    </div>
  );
}
