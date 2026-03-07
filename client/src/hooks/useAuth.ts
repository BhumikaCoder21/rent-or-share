"use client";

import { loginUser, registerUser } from "@/api/authApi";
import { LoginRequest, RegisterRequest, User } from "@/types/auth.types";
import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  const login = async (data: LoginRequest) => {
    try {
      setLoginLoading(true);
      const res = await loginUser(data);
      setUser(res.user);
      return res;
    } finally {
      setLoginLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setRegisterLoading(true);
      const res = await registerUser(data);
      setUser(res.user);
      return res;
    } finally {
      setRegisterLoading(false);
    }
  };

  return {
    user,

    login,
    loginLoading,

    register,
    registerLoading,
  };
};