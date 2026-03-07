"use client";

import { useState } from "react";
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
import ActionCards from "@/components/landing-page/ActionCards";

import { useRides } from "@/hooks/useRides";
import RideCard from "@/components/main-page/RideCard";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredRides.map((ride) => (
          <RideCard key={ride._id} ride={ride} />
        ))}
      </div>
    </main>
  );
}
