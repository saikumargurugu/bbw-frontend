import React from "react";
import Image from "next/image";
import { sportySectionTheme } from "../../styles/sportyTheme";
import bestSaverImg from "../../../public/icons/bestSaver.png";
import communityImg from "../../../public/icons/community.png";
import courtsImg from "../../../public/icons/Courts.png";
import onlineShopingImg from "../../../public/icons/onlineShoping.png";
import socialImg from "../../../public/icons/social.png";
import upskillImg from "../../../public/icons/upskill.png";

interface AboutTile {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

const aboutTiles: AboutTile[] = [
  {
    icon: "🏸",
    title: "Tournament Ready Courts",
    description: "9 BWF & QBA Certified Courts For Serious Play.",
    image:  courtsImg.src
  },
  {
    icon: "🎓",
    title: "Expert Coaching",
    description: "Kids, Adults, & elite players welcome.",
    image:  upskillImg.src
  },
  {
    icon: "🌐",
    title: "Community Engagement",
    description: "Join our vibrant community of badminton enthusiasts.",
    image:  communityImg.src
  },
  {
    icon: "🤝",
    title: "Community & Social Play",
    description: "Weekly Sessions, No partner Needed, All Levels Welcome.",
    image:  socialImg.src
  },
  {
    icon: "🛒",
    title: "Pro Shop",
    description: "Rackets, shoes, shuttles, and accessories available.",
    image:  onlineShopingImg.src
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-2 justify-items-stretch">
      {aboutTiles.map((tile, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center rounded-xl shadow-md p-6 h-full min-h-[180px]"
          style={{
            background: "rgba(10, 20, 30, 0.92)",
            ...sportySectionTheme.card.style,
            fontFamily: sportySectionTheme.font.title.style.fontFamily
          }}
        >
          <div className="text-5xl mb-3 flex items-center justify-center" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>
            {tile.image ? (
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
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
          <div className="font-bold text-lg text-cyan-200 mb-2 text-center" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>{tile.title}</div>
          <div className="text-gray-200 text-sm text-left" style={{ minHeight: '2.5em', fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
            <ul className="list-disc list-outside pl-5 m-0">
              {tile.description.split(/\n|•|\u2022/).map((line, i) =>
                line.trim() ? <li key={i}>{line.trim()}</li> : null
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutTiles;
