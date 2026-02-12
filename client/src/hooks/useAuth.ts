"use client";

import { useState } from "react";
import { loginUser, registerUser } from "@/api/authApi";
import { LoginRequest, RegisterRequest, User } from "@/types/auth.types";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (data: LoginRequest) => {
    try {
      setLoading(true);
      const res = await loginUser(data);
      setUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setLoading(true);
      const res = await registerUser(data);
      setUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, login, register };
};
