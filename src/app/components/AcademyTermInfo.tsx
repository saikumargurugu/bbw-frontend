import React from "react";
import Image from "next/image";

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

export default function AcademyTermInfo( info : AcademyTermInfoProps) {
  return (
    <div className="text-white space-y-6">
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
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-3 rounded-xl shadow transition"
      >
        Book Now
      </a>
      </div>
      {info.dates && (
        <div><strong>Dates:</strong> {info.dates}</div>
      )}
      {info.classFormat && (
        <div><strong>Class Format:</strong> {info.classFormat}</div>
      )}
      {info.termFee && (
        <div><strong>Term Fee covers:</strong> {info.termFee}</div>
      )}
      {info.trainingPlan && info.trainingPlan.length > 0 && (
        <div>
          <strong>10 Weeks Training Plan:</strong>
          <ul className="list-disc list-inside mt-2">
            {info.trainingPlan.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
      {(info.kidsTimetable || info.kidsFees || info.adultTimetable || info.adultFees) && (
        <div>
          <strong>Weekly Timetable:</strong>
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            {/* Kids Training */}
            {(info.kidsTimetable || info.kidsFees) && (
              <div className="flex-1 bg-white/5 rounded-xl p-4">
                <strong className="block mb-2 text-cyan-300">KIDS GROUP TRAINING (6yr and above):</strong>
                {info.kidsTimetable && (
                  <ul className="list-disc list-inside mb-2">
                    {info.kidsTimetable.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
                {info.kidsFees && <div className="mt-2 text-sm text-gray-200">{info.kidsFees}</div>}
              </div>
            )}
            {/* Adult Training */}
            {(info.adultTimetable || info.adultFees) && (
              <div className="flex-1 bg-white/5 rounded-xl p-4">
                <strong className="block mb-2 text-red-300">ADULT GROUP TRAINING (18yr. and above):</strong>
                {info.adultTimetable && (
                  <ul className="list-disc list-inside mb-2">
                    {info.adultTimetable.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
                {info.adultFees && <div className="mt-2 text-sm text-gray-200">{info.adultFees}</div>}
              </div>
            )}
          </div>
        </div>
      )}
      {/* {info.discounts && info.discounts.length > 0 && (
        <div>
          <strong>Discounted Rates for Multiple Lessons:</strong>
          <ul className="list-disc list-inside mt-2">
            {info.discounts.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )} */}
      {/* {info.payment && (
        <div>
          <strong>Payment details:</strong><br />
          {info.payment.name && <>Name: {info.payment.name}<br /></>}
          {info.payment.bsb && <>BSB: {info.payment.bsb}<br /></>}
          {info.payment.account && <>Account number: {info.payment.account}<br /></>}
          {info.payment.reference && <>Reference: {info.payment.reference}<br /></>}
          {info.payment.email && <>Please send us a payment screenshot to <a href={`mailto:${info.payment.email}`} className="underline">{info.payment.email}</a></>}
        </div>
      )} */}
      {info.whatsapp && (
        <div>
          <strong>Join our Academy WhatsApp group (After Successful Enrollment):</strong><br />
          <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="underline text-green-400">WhatsApp Group Link</a>
        </div>
      )}
      {info.notices && info.notices.length > 0 && (
        <div className="text-yellow-300">
          <strong>⚠️ Important Notices:</strong>
          <ul className="list-disc list-inside mt-2">
            {info.notices.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
