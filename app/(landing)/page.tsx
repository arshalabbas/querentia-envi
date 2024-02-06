"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return (
    <main>
      <h1 className="text-head">Querentia</h1>
    </main>
  );
}
