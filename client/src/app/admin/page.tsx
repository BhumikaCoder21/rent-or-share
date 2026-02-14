"use client";

import DashboardCards from "@/components/admin/DashboardCards";
import { users, rides, rentals } from "@/components/admin/admin-data";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <DashboardCards
        totalUsers={users.length}
        totalRides={rides.length}
        totalRentals={rentals.length}
      />
    </div>
  );
}
