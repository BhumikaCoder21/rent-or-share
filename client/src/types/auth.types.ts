export interface LoginRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  rollNumber: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
