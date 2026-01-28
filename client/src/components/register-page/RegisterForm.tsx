"use client";
import React, { FormEvent } from "react";
import { User, Mail, Lock, Phone, CreditCard } from "lucide-react"; 

export default function RegisterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-6">
     
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 block"
        >
          Full Name
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400 group-focus-within:text-violet-600 transition-colors" />
          </div>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-3 bg-violet-50 border border-violet-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
          />
        </div>
      </div>

     
      <div className="space-y-2">
        <label
          htmlFor="rollNo"
          className="text-sm font-medium text-gray-700 block"
        >
          College Roll No.
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CreditCard className="h-5 w-5 text-gray-400 group-focus-within:text-violet-600 transition-colors" />
          </div>
          <input
            id="rollNo"
            type="text"
            placeholder="22CSE045"
            className="w-full pl-10 pr-4 py-3 bg-violet-50 border border-violet-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all uppercase"
          />
        </div>
      </div>

      
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-700 block"
        >
          Phone Number
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-violet-600 transition-colors" />
          </div>
          <input
            id="phone"
            type="tel"
            placeholder="98765 43210"
            className="w-full pl-10 pr-4 py-3 bg-violet-50 border border-violet-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 block"
        >
          College Email ID
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-violet-600 transition-colors" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="student@college.edu"
            className="w-full pl-10 pr-4 py-3 bg-violet-50 border border-violet-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
          />
        </div>
      </div>

   
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 block"
        >
          Create Password
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-violet-600 transition-colors" />
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-3 bg-violet-50 border border-violet-100 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-violet-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
      >
        Create Account
      </button>
    </form>
  );
}
