import React from "react";

export default function SocialLogin() {
  return (
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
          className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook"
            className="h-5 w-5 mr-2"
          />
          <span className="text-sm font-medium text-gray-600">Facebook</span>
        </button>
      </div>
    </div>
  );
}
