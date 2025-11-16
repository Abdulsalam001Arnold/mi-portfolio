import Image from "next/image";
import Hero from "@/components/hero";
import BackgroundAnimation from "@/components/background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Welcome to my Portfolio :)',
  description: 'Home page'
}

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black/70 p-3">
      <BackgroundAnimation/>
      <Hero/>
    </main>
  );
}
