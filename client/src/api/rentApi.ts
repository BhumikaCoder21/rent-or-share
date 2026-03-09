import API from "./axios";
import { ScootyRent } from "@/types/rent.types";

export const getAllScooties = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rent`);

  const data = await res.json();

  console.log("API RESPONSE:", data);

  return data;
};
export const createScootyRent = async (
  data: ScootyRent,
): Promise<ScootyRent> => {
  const response = await API.post("/rent", data);
  return response.data;
};
