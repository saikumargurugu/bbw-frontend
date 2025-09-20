import React from "react";
import Image from "next/image";
import { sportySectionTheme } from "../styles/sportyTheme";

interface AboutTile {
  icon: string;
  title: string;
  description: string;
}

const aboutTiles: AboutTile[] = [
  {
    icon: "🏸",
    title: "Tournament Ready Courts",
    description: "9 BWF & OBA Certified Courts For Serious Play."
  },
  {
    icon: "🎓",
    title: "Expert Coaching",
    description: "Kids, Adults, & elite players welcome."
  },
  {
    icon: "🌐",
    title: "Community Engagement",
    description: "Join our vibrant community of badminton enthusiasts."
  },
  {
    icon: "🤝",
    title: "Community & Social Play",
    description: "Weekly Sessions, No partner Needed, All Levels Welcome."
  },
  {
    icon: "🛒",
    title: "Pro Shop",
    description: "Rackets, shoes, shuttles, and accessories available."
  },
  {
    icon: "💰",
    title: "Best Value Court Hire",
    description: "From only $15/hour off peak hours, Plus membership discounts."
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
            {tile.title === "Tournament Ready Courts" ? (
              <Image src="/court.ico" alt="Badminton Court" width={48} height={48} style={{ display: 'inline-block' }} />
            ) : (
              tile.icon
            )}
          </div>
          <div className="font-bold text-lg text-cyan-200 mb-2 text-center" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>{tile.title}</div>
          <div className="text-gray-200 text-sm text-center" style={{ minHeight: '2.5em', fontFamily: sportySectionTheme.font.description.style.fontFamily }}>{tile.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutTiles;
