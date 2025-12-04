
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: 'Welcome to my Portfolio :)',
  description: 'Home page'
}

const Hero = dynamic(() => import("@/components/hero"), {
    loading: () => (
        <div className="min-h-screen flex items-center justify-center">
            <div className="spinner"></div>
        </div>
    )
});
const BackgroundAnimation = dynamic(() => import("@/components/background"), { ssr: true});
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black/70 p-3">
      <BackgroundAnimation/>
      <Hero/>
    </main>
  );
}
