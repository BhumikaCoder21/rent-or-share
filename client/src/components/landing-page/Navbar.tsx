"use client";

import Link from "next/link";
import { useState } from "react";
import { User } from "lucide-react";
import UserProfileCard from "@/components/main-page/UserProfileCard";

export default function Navbar() {
  const isLoggedIn = true; 
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">CampusRide</h1>

        <div className="relative">
          {!isLoggedIn ? (
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative flex justify-end">
              <button
                onClick={() => setShowProfile((p) => !p)}
                className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
              >
                <User size={20} />
              </button>

              {showProfile && (
                <div className="absolute top-14 right-1/2 translate-x-1/2">
                  <UserProfileCard
                    name="Bhumika Gupta"
                    rollNo="CS23B030"
                    phone="98765 43210"
                    email="bhumika@college.edu"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
