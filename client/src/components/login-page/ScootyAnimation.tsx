import React from "react";

export default function ScootyAnimation() {
  return (
    <div className="hidden md:flex w-1/2 bg-violet-600 relative items-center justify-center overflow-hidden">
   
      <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-4/5 h-4/5 flex flex-col items-center justify-center text-center p-6">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm relative bg-black/20">
    
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/login.mp4" type="video/mp4" />
           
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
              Video Loading...
            </div>
          </video>

       
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white text-left">
            <h3 className="text-xl font-bold">Ride Smart.</h3>
            <p className="text-sm text-gray-200">Campus mobility made easy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
