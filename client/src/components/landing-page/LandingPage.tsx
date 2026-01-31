import Navbar from "./Navbar";
import Hero from "./Hero";
import ActionCards from "./ActionCards";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      <ActionCards />
    </main>
  );
}
