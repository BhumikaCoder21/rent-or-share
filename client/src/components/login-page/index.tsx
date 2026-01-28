import React from "react";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
import ScootyAnimation from "./ScootyAnimation";

export default function LoginPageComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-50 p-4">

      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
   
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
            <p className="text-gray-500 text-sm">
              Enter your details to access the college scooter network.
            </p>
          </div>

          <LoginForm />
          <SocialLogin />
        </div>

        <ScootyAnimation />
      </div>
    </div>
  );
}
