import React from "react";
import { sportySectionTheme } from '../styles/sportyTheme';

export type PersonalTrainingInfo = {
  title?: string;
  description?: string;
  contact?: {
    email?: string;
  };
};

export default function PersonalTraining({ info }: { info: PersonalTrainingInfo }) {
  return (
    <div className="text-white space-y-6" style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
      {info.title && (
        <div className="text-lg font-semibold text-red-300 mb-2" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>
          {info.title}
        </div>
      )}
      {info.description && (
        <div className="mb-2 text-gray-200" style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
          {info.description}
        </div>
      )}
      {info.contact?.email && (
        <div style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
          <strong>Contact Us:</strong> <a href={`mailto:${info.contact.email}`} className="underline text-cyan-300">{info.contact.email}</a>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <a
          href="https://forms.gle/caCASRDZrJWbvnEg6"
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow transition"
          style={{ fontFamily: sportySectionTheme.font.button.style.fontFamily }}
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
