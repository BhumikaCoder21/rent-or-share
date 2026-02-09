"use client";

import { Car, Bike, ShieldCheck, Users, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-gradient-to-b from-[#f2f8ff] via-white to-white px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto text-center space-y-12">
        
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Heading back to hostel or heading home?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Ride together. Save money. Stay safe.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#00AFF5] to-[#0099d6] hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
                <Car className="w-5 h-5" />
                Find a Ride
              </button>

              <button className="flex items-center gap-2 bg-white border border-[#00AFF5] text-[#00AFF5] hover:bg-[#e6f4ff] px-6 py-3 rounded-xl font-semibold">
                <Bike className="w-5 h-5" />
                Rent a Scooty
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-44 border-t-2 border-dashed border-gray-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-[#00AFF5]" />
              <p className="font-semibold">College-only access</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Users className="w-7 h-7 text-[#00AFF5]" />
              <p className="font-semibold">Real students, real rides</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="w-7 h-7 text-[#00AFF5]" />
              <p className="font-semibold">Direct contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">CampusRide</span> · Built
          with ❤️ for campus life
        </p>
      </div>
    </footer>
  );
}
