"use client";

import { useState, useEffect } from "react";
import API from "@/api/axios";
import { getDashboardStats, getAllProfiles } from "@/api/admin.api";
import { User } from "@/types/users.types";

export interface AdminDashboardData {
  totalUsers: number;
  totalVehicles: number;
  totalRides: number;
  activeRentals: number;
}

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(null);
  const [profiles, setProfiles] = useState<User[]>([]);

  const getDashboard = async (): Promise<AdminDashboardData> => {
    try {
      setLoading(true);
      setError(null);

      const res = await getDashboardStats();
      console.log("Dashboard API response:", res);

      const data = res.data.dashboarddata as AdminDashboardData;
      setDashboardData(data);
      return data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProfiles = async (): Promise<User[]> => {
    try {
      setLoading(true);
      setError(null);

      const res = await getAllProfiles();
      console.log("Profiles API response:", res);
      const data = res.data.users as User[];
      console.log("Profiles data:", data);

      setProfiles(data);
      return data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching dashboard and profiles...");
    getDashboard();
    getProfiles();
  }, []);

  const deleteUser = async (userId: string): Promise<any> => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      const res = await API.delete(`/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    dashboardData,
    profiles,
    getDashboard,
    getProfiles,
    deleteUser,
    loading,
    error,
  };
};