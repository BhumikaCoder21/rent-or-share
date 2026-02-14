import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
import ActionCards from "@/components/landing-page/ActionCards";

import RideCard from "@/components/main-page/RideCard";
import { rideCards } from "@/components/main-page/ride-card-data";

import ScootyRentCard from "@/components/main-page/ScootyRentCard";
import { scootyRentData } from "@/components/main-page/scooty-rent-data";
import Footer from "@/components/landing-page/Footer";

export default function UserCard() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            <Navbar />
            <Hero />
            <SearchBar />
            <ActionCards />
          </main>
    );
}
