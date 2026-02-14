"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "Users", href: "/admin/users" },
    { name: "Rides", href: "/admin/rides" },
    { name: "Rentals", href: "/admin/rentals" },
  ];

  return (
    <div className="w-64 bg-black text-white p-5 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-2 rounded ${
              pathname === link.href ? "bg-gray-700" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
