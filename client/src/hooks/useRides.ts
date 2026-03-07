"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllRides, createRide, deleteRide } from "@/api/rideApi";
import { Ride } from "@/types/ride.types";

export const useRides = () => {
  const queryClient = useQueryClient();

  const { data: rides = [], isLoading: loading } = useQuery({
    queryKey: ["rides"],
    queryFn: getAllRides,
  });

  const mutation = useMutation({
    mutationFn: createRide,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rides"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRide,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rides"] });
    },
  });

  return {
    rides,
    loading,
    addRide: mutation.mutateAsync,
    removeRide: deleteMutation.mutateAsync,
  };
};

