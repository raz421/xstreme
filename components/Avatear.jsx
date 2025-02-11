import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Image
        width={32}
        height={32}
        src="/avatar.png"
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
}
