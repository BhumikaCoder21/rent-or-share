export interface LoginRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  rollNo: string;
  phone: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
