import React from "react";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import ScootyAnimation from "@/components/login-page/ScootyAnimation";

export default function RegisterPageComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#EFEEFB] p-4 overflow-hidden">
    
      <div className="absolute top-[5%] left-[5%] md:left-[15%] w-24 h-24 bg-[#6C63FF] rounded-full shadow-lg z-0" />
      <div className="absolute bottom-[5%] right-[5%] md:right-[15%] w-32 h-32 bg-white/50 rounded-full blur-sm z-0" />

  
      <div className="relative z-10 flex w-full max-w-[1100px] bg-white rounded-[40px] shadow-2xl overflow-hidden min-h-[650px]">
        
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
         

          <RegisterForm />

          <div className="mt-6 text-center text-xs text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#6C63FF] font-bold hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>

        <ScootyAnimation />
      </div>
    </div>
  );
}
