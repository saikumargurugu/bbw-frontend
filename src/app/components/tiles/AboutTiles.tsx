import React from "react";
import Image from "next/image";
import { sportySectionTheme } from "../../styles/sportyTheme";
import bestSaverImg from "../../../public/icons/bestSaver.png";
import communityImg from "../../../public/icons/community.png";
import courtsImg from "../../../public/icons/Courts.png";
// import onlineShopingImg from "../../../public/icons/onlineShoping.png";
import socialImg from "../../../public/icons/social.png";
import PlayOn from "../../../public/icons/PlayOn.png";
import upskillImg from "../../../public/icons/upskill.png";

interface AboutTile {
  icon: string;
  title: string;
  description?: string;
  image?: string;
}

const aboutTiles: AboutTile[] = [
  {
    icon: "🎓",
    title: "Academy",
    description: "Kids, Adults, & elite players welcome.",
    image:  upskillImg.src
  },
  {
    icon: "🏸",
    title: "9 BWF Standard Indoor Courts",
    // description: "9 BWF & QBA Certified Courts For Serious Play.",
    image:  courtsImg.src
  },
  {
    icon: "🌐",
    title: "Community Engagement",
    description: "Join our vibrant community of badminton enthusiasts.",
    image:  communityImg.src
  },
  {
    icon: "🤝",
    title: "Queensland Affliated Club",
    description: "Weekly Sessions, No partner Needed, All Levels Welcome.",
    image:  socialImg.src
  },
  {
    icon: "🛒",
    title: "PlayOn Voucher Accepted",
    description: "Rackets, shoes, shuttles, and accessories available.",
    image:  PlayOn.src
  },
  {
    icon: "💰",
    title: "Best Value Court Hire",
    description: "From only $15/hour off peak hours, Plus membership discounts.",
    image:  bestSaverImg.src
  }
];

const AboutTiles: React.FC = () => (
  <div className="w-full flex justify-center z-10 mb-8">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-2 justify-items-stretch">
      {aboutTiles.map((tile, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center md:rounded-xl md:shadow-md md:p-6 h-full min-h-[120px] md:min-h-[180px]"
          style={{
            background: typeof window !== 'undefined' && window.innerWidth >= 768 ? "rgba(10, 20, 30, 0.92)" : "transparent",
            ...sportySectionTheme.card.style,
            fontFamily: sportySectionTheme.font.title.style.fontFamily
          }}
        >
          <div className="text-5xl mb-2 flex items-center justify-center" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>
            {tile.image ? (
              <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  className="rounded-xl"
                />
              </div>
            ) : (
              tile.icon
            )}
          </div>
          <div className="font-bold text-base md:text-lg mb-1 md:mb-2 text-center"
            style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily, fontSize: typeof window !== 'undefined' && window.innerWidth >= 768 ? '1.6rem' : '1.1rem' }}>
            {tile.title}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutTiles;
