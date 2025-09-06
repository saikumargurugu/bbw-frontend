import React from "react";
import Image from "next/image";
import { sportySectionTheme } from "../styles/sportyTheme";
import { motion } from "framer-motion";
import data from '../pages/academyContent.json';

export type AcademyTermInfoProps = {
  dates?: string;
  classFormat?: string;
  termFee?: string;
  trainingPlan?: string[];
  kidsTimetable?: string[];
  kidsFees?: string;
  adultTimetable?: string[];
  adultFees?: string;
  discounts?: string[];
  payment?: {
    name?: string;
    bsb?: string;
    account?: string;
    reference?: string;
    email?: string;
  };
  whatsapp?: string;
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  notices?: string[];
};

export default function AcademyTermInfo({
  // dates,
  // classFormat,
  // termFee,
  // trainingPlan,
  whatsapp,
  // notices,
}: AcademyTermInfoProps) {
  return (
    <div className="text-white space-y-8">
      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-2xl shadow-2xl p-6 md:p-10 border-l-8 border-red-700 flex flex-col items-center">
        <Image
          src="https://badmintonbrisbane.yepbooking.com.au/images/infotab/small/1-1749350939.png"
          alt="Personal Training"
          width={400}
          height={250}
          className="w-full max-w-md mx-auto rounded-xl shadow-lg mb-6"
          priority
        />
        {/* Button Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <a
            href="https://badmintonbrisbane.yepbooking.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-8 py-3 font-bold uppercase tracking-wider shadow-md text-base md:text-lg border border-red-500 transition-all duration-200 outline-none focus:ring-2 focus:ring-red-300 active:scale-98 rounded-md"
          >
            Book Now
          </a>
        </div>
              {/* Academy Content Section */}
      <motion.section
        className={sportySectionTheme.section.className + ' text-center'}
        style={{ ...sportySectionTheme.section.style, padding: '60px 20px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          {data.academy.academyContent.map((content, idx) => (
            <div key={idx} className="bg-black/70 border-l-8 border-red-700 rounded-xl shadow-xl p-6 mb-8">
              <h3 className={sportySectionTheme.font.title.className} style={{ color: '#e10600' }}>{content.title}</h3>
              <ul className="mt-4 text-left list-disc list-inside">
                {content.points.map((point, pointIdx) => (
                  <li key={pointIdx}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 italic">{content.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
        {/* {dates && (
          <div>
            <span className="text-red-500 font-bold uppercase tracking-wide">
              Dates:
            </span>{" "}
            <span className="font-semibold text-white">{dates}</span>
          </div>
        )}
        {classFormat && (
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-wide">
              Class Format:
            </span>{" "}
            <span className="font-semibold text-white">{classFormat}</span>
          </div>
        )}
        {termFee && (
          <div>
            <span className="text-yellow-400 font-bold uppercase tracking-wide">
              Term Fee covers:
            </span>{" "}
            <span className="font-semibold text-white">{termFee}</span>
          </div>
        )}
        {trainingPlan && trainingPlan.length > 0 && (
          <div>
            <strong className="block text-lg text-cyan-300 mb-2 uppercase tracking-wide">
              10 Weeks Training Plan:
            </strong>
            <ul className="list-disc list-inside mt-2 text-white/90">
              {trainingPlan.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )} */}
        {whatsapp && (
          <div className="mt-6">
            <strong className="text-green-400 uppercase tracking-wide">
              Join our Academy WhatsApp group (After Successful Enrollment):
            </strong>
            <br />
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-300 font-bold"
            >
              WhatsApp Group Link
            </a>
          </div>
        )}
        {/* {notices && notices.length > 0 && (
          <div className="bg-gray-900/90 rounded-xl mt-6 p-4">
            <strong className="text-lg uppercase tracking-wide text-white">
              ⚠️ Important Notices:
            </strong>
            <ul className="list-disc list-inside mt-2 text-white">
              {notices.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
}
