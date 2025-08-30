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
            style={{
              fontFamily: 'Oswald, Montserrat, Arial, sans-serif',
              letterSpacing: '0.08em',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px 0 #c5303040',
              textShadow: 'none',
            }}
          >
            Book Now
          </a>
        </div>
        {info.dates && (
          <div><span className="text-red-500 font-bold uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Dates:</span> <span className="font-semibold text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{info.dates}</span></div>
        )}
        {info.classFormat && (
          <div><span className="text-cyan-400 font-bold uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Class Format:</span> <span className="font-semibold text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{info.classFormat}</span></div>
        )}
        {info.termFee && (
          <div><span className="text-yellow-400 font-bold uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Term Fee covers:</span> <span className="font-semibold text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{info.termFee}</span></div>
        )}
        {info.trainingPlan && info.trainingPlan.length > 0 && (
          <div>
            <strong className="block text-lg text-cyan-300 mb-2 uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>10 Weeks Training Plan:</strong>
            <ul className="list-disc list-inside mt-2 text-white/90" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
              {info.trainingPlan.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {/* {(info.kidsTimetable || info.kidsFees || info.adultTimetable || info.adultFees) && (
          <div>
            <strong className="block text-lg text-white mb-2 uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Weekly Timetable:</strong>
            <div className="flex flex-col md:flex-row gap-8 mt-4"> */}
              {/* Kids Training */}
              {/* {(info.kidsTimetable || info.kidsFees) && (
                <div className="flex-1 bg-gray-900/80 rounded-xl p-4 border-l-4 border-white shadow-sm">
                  <strong className="block mb-2 text-white uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>KIDS GROUP TRAINING (6yr and above):</strong>
                  {info.kidsTimetable && (
                    <ul className="list-disc list-inside mb-2 text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
                      {info.kidsTimetable.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {info.kidsFees && <div className="mt-2 text-sm text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{info.kidsFees}</div>}
                </div>
              )} */}
              {/* Adult Training */}
              {/* {(info.adultTimetable || info.adultFees) && (
                <div className="flex-1 bg-gray-900/80 rounded-xl p-4 border-l-4 border-white shadow-sm">
                  <strong className="block mb-2 text-white uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>ADULT GROUP TRAINING (18yr. and above):</strong>
                  {info.adultTimetable && (
                    <ul className="list-disc list-inside mb-2 text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
                      {info.adultTimetable.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {info.adultFees && <div className="mt-2 text-sm text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{info.adultFees}</div>}
                </div>
              )}
            </div>
          </div> */}
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
        <div className="mt-6">
          <strong className="text-green-400 uppercase tracking-wide" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Join our Academy WhatsApp group (After Successful Enrollment):</strong><br />
          <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="underline text-green-300 font-bold" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>WhatsApp Group Link</a>
        </div>
      )}
      {info.notices && info.notices.length > 0 && (
        <div className="bg-gray-900/90 rounded-xl mt-6 p-4">
          <strong className="text-lg uppercase tracking-wide text-white" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>⚠️ Important Notices:</strong>
          <ul className="list-disc list-inside mt-2 text-white" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
            {info.notices.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
