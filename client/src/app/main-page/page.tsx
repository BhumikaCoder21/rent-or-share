import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
export default function UserCard() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            <Navbar />
            <Hero />
            <SearchBar/>
          </main>
    );
}