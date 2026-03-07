import API from "./axios";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/auth.types";

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const response = await API.post("/auth/register", data);
  console.log("api called successfully", data)
  return response.data;
};
