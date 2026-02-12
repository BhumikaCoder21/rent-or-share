import API from "./axios";
import { ScootyRent } from "@/types/rent.types";

export const getAllScooties = async (): Promise<ScootyRent[]> => {
  const response = await API.get("/scooties");
  return response.data;
};

export const createScootyRent = async (
  data: ScootyRent,
): Promise<ScootyRent> => {
  const response = await API.post("/scooties", data);
  return response.data;
};
