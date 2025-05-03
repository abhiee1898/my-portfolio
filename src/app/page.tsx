import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Hero2/>
    </main>
  );
}

