"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import UserProfileCard from "@/components/main-page/UserProfileCard";

export default function Navbar() {
  const isLoggedIn = true;
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">CampusRide</h1>

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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md"
            >
              <User size={20} />
            </button>

            <div
              className={`
                absolute right-0 top-full mt-3 
                z-50 
                origin-top-right transition-all duration-200 ease-out
                ${showProfile ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}
              `}
            >
             
              <div className="w-[calc(100vw-3rem)] sm:w-80">
                <UserProfileCard
                  name="Bhumika Gupta"
                  rollNo="CS23B030"
                  phone="98765 43210"
                  email="bhumika@college.edu"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
