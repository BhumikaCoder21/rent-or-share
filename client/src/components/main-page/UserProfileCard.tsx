"use client";
import React from "react";
import { User, Mail, Phone, CreditCard } from "lucide-react";
type UserProfileProps = {
  name: string;
  rollNo: string;
  phone: string;
  email: string;
};

export default function UserProfileCard({
  name,
  rollNo,
  phone,
  email,
}: UserProfileProps) {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
    
      <div className="flex justify-center">
        <div className="h-20 w-20 rounded-full bg-violet-600 flex items-center justify-center text-white text-2xl font-bold">
          {name?.charAt(0).toUpperCase()}
        </div>
          </div>
          
       <h2 className="text-center text-xl font-semibold text-gray-800 mt-3">
        {name}
      </h2>

   
      <div className="mt-5 space-y-3 text-gray-700 text-sm">
        <div className="flex items-center gap-3">
          <CreditCard className="h-4 w-4 text-violet-600" />
          <span>{rollNo}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-violet-600" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-violet-600" />
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}
