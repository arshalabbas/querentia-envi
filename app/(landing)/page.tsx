"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Image src={"/logo.svg"} alt="logo" width={200} height={200} />
    </main>
  );
}
