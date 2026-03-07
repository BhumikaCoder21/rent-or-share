"use client";
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
import ActionCards from "@/components/landing-page/ActionCards";

// import ScootyRentCard from "@/components/main-page/ScootyRentCard";
// import { scootyRentData } from "@/components/main-page/scooty-rent-data";
// import Footer from "@/components/landing-page/Footer";

import { useRides } from "@/hooks/useRides";
import RideCard from "@/components/main-page/RideCard";

export default function UserCard() {
  const { rides, loading } = useRides();
  console.log("loading:", loading);
  console.log("rides:", rides);
  if (loading) {
    return <p className="p-6">Loading rides...</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      <SearchBar />
      <ActionCards />

   

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {rides.map((ride) => (
          <RideCard key={ride._id} ride={ride} />
        ))}
      </div>
    </main>
  );
}
