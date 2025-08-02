import React from "react";

export type PersonalTrainingInfo = {
  title?: string;
  description?: string;
  contact?: {
    email?: string;
  };
};

export default function PersonalTraining({ info }: { info: PersonalTrainingInfo }) {
  return (
    <div className="text-white space-y-6">
      {info.title && (
        <div className="text-lg font-semibold text-red-300 mb-2">{info.title}</div>
      )}
      {info.description && (
        <div className="mb-2 text-gray-200">{info.description}</div>
      )}
      {info.contact?.email && (
        <div>
          <strong>Contact Us:</strong> <a href={`mailto:${info.contact.email}`} className="underline text-cyan-300">{info.contact.email}</a>
        </div>
      )}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
      <a
        href="mailto:admin@badmintonbrisbane.com.au"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow transition"
      >
        Contact Us
      </a>
    </div>
    </div>
  );
}
