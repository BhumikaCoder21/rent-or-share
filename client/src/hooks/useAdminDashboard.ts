import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../api/admin.api";

type DashboardStats = {
  totalUsers: number;
  totalRides: number;
  activeRentals: number;
  totalVehicles: number;
};

export const useAdminDashboard = () => {
  return useQuery<DashboardStats>({
    queryKey: ["admin", "dashboard", "stats"],
    queryFn: async () => {
      const response = await getDashboardStats();
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};