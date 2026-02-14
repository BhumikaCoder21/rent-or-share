"use client";

import React, { FormEvent, useState } from "react";
import { User, Mail, Lock, Phone, CreditCard } from "lucide-react";
import UserProfileCard from "@/components/main-page/UserProfileCard";
import { RegisterRequest } from "@/types/auth.types";

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    rollNo: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showProfile, setShowProfile] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    setShowProfile(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      <form onSubmit={handleSubmit} className="space-y-5 mt-6 w-full max-w-xl">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full pl-10 py-3 rounded-xl bg-violet-50 border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            College Roll No.
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="rollNo"
              required
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="22CSE045"
              className="w-full pl-10 py-3 rounded-xl bg-violet-50 border uppercase"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full pl-10 py-3 rounded-xl bg-violet-50 border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            College Email ID
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="student@college.edu"
              className="w-full pl-10 py-3 rounded-xl bg-violet-50 border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Create Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-10 py-3 rounded-xl bg-violet-50 border"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold"
        >
          Create Account
        </button>
      </form>

      {showProfile && (
        <div className="w-full max-w-sm">
          <UserProfileCard
            name={formData.name}
            rollNo={formData.rollNo}
            phone={formData.phone}
            email={formData.email}
          />
        </div>
      )}
    </div>
  );
}
