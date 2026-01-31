"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">CampusRide</h1>

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
      </div>
    </nav>
  );
}
