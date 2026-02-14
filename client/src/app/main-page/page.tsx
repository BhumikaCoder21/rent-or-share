import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import SearchBar from "@/components/landing-page/SearchBar";
import ActionCards from "@/components/landing-page/ActionCards";
import RideCard from "@/components/main-page/RideCard";
import { rideCards } from "@/components/main-page/card-data";

export default function UserCard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      <SearchBar />
      <ActionCards />

      <section className="px-6 md:px-12 py-10">
        <h2 className="text-2xl font-bold mb-6">Available Rides</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rideCards.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      </section>
    </main>
  );
}
