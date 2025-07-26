import React from "react";

export default function ProShopLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <span className="text-6xl mb-4"> 🔜 🛒 </span>
      <h2 className="text-3xl font-bold text-cyan-700 mb-2">Pro Shop Coming Soon!</h2>
      <p className="text-gray-500 text-lg text-center max-w-md">
        Our online Pro Shop is getting ready! <br />
        Please check back soon for the best badminton gear, rackets, shoes, accessories and everything badminton releated.
      </p>
    </div>
  );
}