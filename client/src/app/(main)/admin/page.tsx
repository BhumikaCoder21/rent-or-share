"use client";

import DashboardCards from "@/components/admin/DashboardCards";
import { useAdminDashboard } from "@/hooks/useAdminDashboard"

export default function AdminDashboard() {
  const {data, isLoading, error} = useAdminDashboard()
  if(error) return null;
  return (isLoading)?  <div>Loading....</div> : 
  (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <DashboardCards
       totalUsers={data?.totalUsers || 0}
       totalRides={data?.totalRides || 0}
       totalRentals={data?.activeRentals || 0}
       totalVehicles={data?.totalVehicles || 0}
   />
    </div>
  );
}
