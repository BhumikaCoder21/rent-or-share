"use client";

import { useEffect, useState } from "react";
import { getAllRides, createRide } from "@/api/rideApi";
import { Ride } from "@/types/ride.types";

export const useRides = () => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRides = async () => {
    try {
      setLoading(true);
      const data = await getAllRides();
      setRides(data);
    } finally {
      setLoading(false);
    }
  };

  const addRide = async (ride: Ride) => {
    const newRide = await createRide(ride);
    setRides((prev) => [...prev, newRide]);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return { rides, loading, addRide, fetchRides };
};
