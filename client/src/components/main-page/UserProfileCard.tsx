"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone, CreditCard } from "lucide-react";

type User = {
  name: string;
  rollNumber: string;
  phoneNumber: string;
  email: string;
};

export default function UserProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
      <div className="flex justify-center">
        <div className="h-20 w-20 rounded-full bg-violet-600 flex items-center justify-center text-white text-2xl font-bold">
          {user.name?.charAt(0).toUpperCase()}
        </div>
      </div>

      <h2 className="text-center text-xl font-semibold text-gray-800 mt-3">
        {user.name}
      </h2>

      <div className="mt-5 space-y-3 text-gray-700 text-sm">
        <div className="flex items-center gap-3">
          <CreditCard className="h-4 w-4 text-violet-600" />
          <span>{user.rollNumber}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-violet-600" />
          <span>{user.phoneNumber}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-violet-600" />
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}
