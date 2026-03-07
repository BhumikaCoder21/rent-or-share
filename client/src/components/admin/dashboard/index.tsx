"use client";

import DashboardCards from "@/components/admin/dashboard/DashboardCards";
import { useAdmin } from "@/hooks/useAdmin"

export function AdminDashboard() {
  const {dashboardData, loading, error} = useAdmin()
  const data = dashboardData;
  if(error) return <h1>Error</h1>
  return (loading)?  <div>Loading....</div> : 
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
