"use client";

import React, { useState } from "react";
import { ScanBarcode, X } from "lucide-react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function SocialLogin() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleScan = (text: string) => {
    if (text) {
      console.log("Scanned Data:", text);
      alert(`Scanned Code: ${text}`);
      setIsScannerOpen(false);
    }
  };

  return (
    <>
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or login with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            <span className="text-sm font-medium text-gray-600">Google</span>
          </button>

          <button
            type="button"
            onClick={() => setIsScannerOpen(true)}
            className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl hover:bg-violet-50 hover:border-violet-200 transition-colors group"
          >
            <ScanBarcode className="h-5 w-5 mr-2 text-gray-600 group-hover:text-violet-600 transition-colors" />
            <span className="text-sm font-medium text-gray-600 group-hover:text-violet-700">
              College ID
            </span>
          </button>
        </div>
      </div>

      {isScannerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setIsScannerOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-sm transition-colors z-50"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full max-w-sm bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
            <div className="p-4 text-center border-b border-white/10 z-10 relative bg-black/50 backdrop-blur-md">
              <h3 className="text-white font-semibold text-lg">Scan ID Card</h3>
              <p className="text-white/50 text-sm">
                Align barcode within frame
              </p>
            </div>

            <div className="aspect-square bg-gray-900 relative overflow-hidden">
              <Scanner
                onScan={(result) => {
                  if (result && result.length > 0) {
                    handleScan(result[0].rawValue);
                  }
                }}
                components={{
                  finder: false,
                }}
                styles={{
                  container: { width: "100%", height: "100%" },
                }}
              />

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] animate-[scan_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-10 left-10 w-8 h-8 border-t-4 border-l-4 border-violet-500 rounded-tl-xl"></div>
                <div className="absolute top-10 right-10 w-8 h-8 border-t-4 border-r-4 border-violet-500 rounded-tr-xl"></div>
                <div className="absolute bottom-10 left-10 w-8 h-8 border-b-4 border-l-4 border-violet-500 rounded-bl-xl"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 border-b-4 border-r-4 border-violet-500 rounded-br-xl"></div>
              </div>
            </div>

            <div className="p-4 bg-gray-900 text-center z-10 relative">
              <button
                onClick={() => setIsScannerOpen(false)}
                className="text-violet-400 text-sm font-medium hover:text-violet-300"
              >
                Having trouble? Enter manually
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
