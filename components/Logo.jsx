import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="LWS Xstream Logo"
        className="h-6"
        height={24}
        width={200}
      />
    </>
  );
}
