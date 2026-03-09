import API from "./axios";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/auth.types";

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await API.post("/auth/login", data);

  const { token, user } = response.data;

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return response.data;
};

export const registerUser = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const response = await API.post("/auth/register", data);

  const { token, user } = response.data;

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  console.log("api called successfully", data);

  return response.data;
};
