"use client";

import { useState } from "react";
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
import ActionCards from "@/components/landing-page/ActionCards";

import { useRides } from "@/hooks/useRides";
import { useScooty } from "@/hooks/useRents";

import RideCard from "@/components/main-page/RideCard";
import ScootyRentCard from "@/components/main-page/ScootyRentCard";
import Footer from "@/components/landing-page/Footer";

export default function UserCard() {
  const { rides, loading } = useRides();

  const [searchData, setSearchData] = useState<{
    from: string;
    to: string;
    date: Date | null;
  } | null>(null);

  const handleSearch = (data: {
    from: string;
    to: string;
    date: Date | null;
  }) => {
    setSearchData(data);
    console.log("Search Data:", data);
  };

  const filteredRides = searchData
    ? rides.filter((ride) => {
        const matchFrom = ride.from
          .toLowerCase()
          .includes(searchData.from.toLowerCase());

        const matchTo = ride.to
          .toLowerCase()
          .includes(searchData.to.toLowerCase());

        const matchDate = searchData.date
          ? new Date(ride.date).toDateString() ===
            new Date(searchData.date).toDateString()
          : true;

        return matchFrom && matchTo && matchDate;
      })
    : rides;

  if (loading) {
    return <p className="p-6">Loading rides...</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />

      <Hero />

      <SearchBar onSearch={handleSearch} />

      <ActionCards />

   
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Available Rides
        </h2>

        {filteredRides.length === 0 ? (
          <p className="text-gray-500">No rides available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRides.map((ride) => (
              <RideCard key={ride._id} ride={ride} />
            ))}
          </div>
        )}
      </section>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Available Rents
        </h2>

        {rentLoading ? (
          <p className="text-gray-500">Loading scooties...</p>
        ) : scooties.length === 0 ? (
          <p className="text-gray-500">No scooties available for rent.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scooties.map((scooty) => (
              <ScootyRentCard key={scooty._id} data={scooty} />
            ))}
          </div>
        )}
      </section>
      <Footer/>
    </main>

  );
}
