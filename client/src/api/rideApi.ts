import API from "./axios";
import { Ride } from "@/types/ride.types";

export const getAllRides = async (): Promise<Ride[]> => {
  const response = await API.get("/rides");
  return response.data.rides;
};

export const createRide = async (data: Ride): Promise<Ride> => {
  const response = await API.post("/rides", data);
  return response.data;
};

export const deleteRide = async (id: string) => {
  const response = await API.delete(`/rides/${id}`);
  return response.data;
};