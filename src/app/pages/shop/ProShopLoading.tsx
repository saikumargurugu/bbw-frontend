import React from "react";
import { sportySectionTheme } from "../../styles/sportyTheme";

export default function ProShopLoading() {
  return (
  <div className={sportySectionTheme.section.className + ' flex flex-col items-center justify-center min-h-screen mt-20 mb-20'} style={sportySectionTheme.section.style}>
      <span className="text-6xl mb-4"> 🔜 🛒 </span>
      <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow-xl font-sans uppercase" style={{letterSpacing:'0.04em', fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Pro Shop Coming Soon!</h2>
      <p className="text-white/80 text-lg text-center max-w-md font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
        Our online Pro Shop is getting ready! <br />
        Please check back soon for the best badminton gear, rackets, shoes, accessories and everything badminton related.
      </p>
    </div>
  );
}