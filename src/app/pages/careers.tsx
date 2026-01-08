import React from "react";
import careersData from "./careersData.json";
import { sportySectionTheme } from "../styles/sportyTheme";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function CareersPage() {
  return (
    <section
      className={sportySectionTheme.section.className + " min-h-screen relative overflow-hidden"}
      style={sportySectionTheme.section.style}
    >
      {/* Accent background shape */}
      <div className="hidden md:block absolute -left-24 top-0 h-full w-1/2 z-0" style={sportySectionTheme.accent.style} />
      <div className={sportySectionTheme.card.className + " relative z-10 max-w-2xl mx-auto flex flex-col items-center p-8 md:p-14 shadow-2xl"} style={sportySectionTheme.card.style}>
        <div className="flex flex-col items-center mb-4">
          <span className="bg-red-600 rounded-full p-4 mb-2 shadow-lg">
            <WorkOutlineIcon style={{ fontSize: 40, color: 'white' }} />
          </span>
          <h1 className={sportySectionTheme.font.title.className + " text-center"} style={sportySectionTheme.font.title.style}>
            {careersData.title}
          </h1>
        </div>
        <hr className="w-16 border-red-500 mb-6" />
        <p className={sportySectionTheme.font.description.className + " text-center text-justify mb-6"} style={sportySectionTheme.font.description.style}>
          {careersData.description}
        </p>
        {careersData.bulletPoints && careersData.bulletPoints.length > 0 && (
          <ul className="list-disc list-inside text-left text-justify mb-6">
            {careersData.bulletPoints.map((point: string, idx: number) => (
              <li key={idx} className="mb-1">{point}</li>
            ))}
          </ul>
        )}
        {careersData.subText && (
          <p className="text-sm text-gray-700 mb-4 text-center">{careersData.subText}</p>
        )}
        {careersData.ButtonHeading && (
          <p className="text-base font-medium text-center mb-4">{careersData.ButtonHeading}</p>
        )}
        <a
          href={careersData.registration.url}
          target="_blank"
          rel="noopener noreferrer"
          className={sportySectionTheme.sharpButton.className + " w-full max-w-xs text-center"}
          style={sportySectionTheme.sharpButton.style}
        >
          {careersData.registration.label}
        </a>
      </div>
    </section>
  );
}
