"use client";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import ActionCards from "./ActionCards";
import Footer from "./Footer";
export default function LandingPage() {
  const handleSearch = (data: {
    from: string;
    to: string;
    date: Date | null;
  }) => {
    console.log("Search:", data);
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {" "}
      <Navbar /> <Hero /> <SearchBar
        onSearch={handleSearch}
      /> <ActionCards /> <Footer />{" "}
    </main>
  );
}
