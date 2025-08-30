'use client';
import React  from 'react';
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { sportySectionTheme } from '@/app/styles/sportyTheme';
// import ServicesSection from '../components/ServicesSection';
import data from './dataBrisbaneBadminton.json';

// --- Club Page Data JSON ---
const clubPageData = data.club;

export default function ClubPage() {
  // const router = useRouter();
  // const [openTerms, setOpenTerms] = useState(false);

  return (
    <div className="bg-bgThemeDark min-h-screen">
      {/* About Section */}
      <motion.section
        className={sportySectionTheme.section.className + ' !text-center'}
        style={sportySectionTheme.section.style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Angled red accent background for sporty look */}
        <div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
        <div className="w-full px-2 sm:px-8 mx-auto flex justify-center z-10" style={{ maxWidth: '900px' }}>
          <div className={sportySectionTheme.card.className} style={sportySectionTheme.card.style}>
            <h2
              className={sportySectionTheme.font.title.className + ' mb-6'}
              style={{ ...sportySectionTheme.font.title.style, textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
            >
              {clubPageData.about.title}
            </h2> 
            <div
              className="relative w-full flex justify-center"
            >
              <div
                className="bg-black/70 border-l-8 border-red-700 rounded-xl shadow-xl px-6 py-8 md:px-10 md:py-10 max-w-2xl mx-auto text-center"
                style={{
                  ...sportySectionTheme.font.description.style,
                  boxShadow: '0 8px 40px 0 #000a, 0 1.5px 0 #c53030',
                  fontFamily: sportySectionTheme.font.description.style.fontFamily,
                  letterSpacing: sportySectionTheme.font.description.style.letterSpacing,
                  lineHeight: sportySectionTheme.font.description.style.lineHeight,
                  fontWeight: 500,
                  fontSize: '1.15rem',
                }}
              >
                <span className={sportySectionTheme.font.description.className + ' text-center'}>
                  {clubPageData.about.description}
                </span>
              </div>
            </div>
            {clubPageData.benefits && clubPageData.benefits.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Club Member Benefits</h3>
                <ul className="list-disc list-inside text-left max-w-2xl mx-auto text-lg text-gray-100">
                  {clubPageData.benefits.map((benefit: string, idx: number) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* QBA Membership & Court Hire Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center bg-white/10 rounded-3xl mb-8 border border-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">{clubPageData.qba.title}</h3>
        <p className="text-lg text-gray-100 mb-4" dangerouslySetInnerHTML={{ __html: clubPageData.qba.description }} />
        <h4 className="text-xl font-bold text-cyan-200 mb-2">{clubPageData.qba.courtTitle}</h4>
        <p className="text-lg text-gray-100 mb-2" dangerouslySetInnerHTML={{ __html: clubPageData.qba.courtDescription }} />
        <ul className="text-lg text-gray-100 mb-4 list-disc list-inside text-left max-w-xl mx-auto">
          {clubPageData.qba.courtList.map((item, idx) => (
            <li key={idx}><strong>{item}</strong></li>
          ))}
        </ul>
        <p className="text-lg text-gray-100 mb-2" dangerouslySetInnerHTML={{ __html: clubPageData.qba.bookingNote }} />
        {/* <button
          className="mt-4 text-sm text-cyan-200 underline hover:text-red-400 transition"
          onClick={() => setOpenTerms(true)}
        >
          Terms and Conditions apply
        </button> */}
      </motion.section>

      {/* Terms & Conditions Modal */}
      {/* {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-bgThemeDark rounded-xl max-w-lg w-full p-6 shadow-2xl relative border border-white/10">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-400"
              onClick={() => setOpenTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-cyan-200 mb-4">{clubPageData.terms.title}</h2>
            <div className="text-gray-100 text-sm max-h-[60vh] overflow-y-auto space-y-3 text-left">
              <ul className="list-disc list-inside space-y-2">
                {clubPageData.terms.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )} */}

      {/* Facilities Section */}
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-3">
        {clubPageData.facilities.map((facility, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-2xl shadow-lg p-8 hover:shadow-cyan-200 transition-transform duration-300 hover:scale-105 flex flex-col items-center border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-200 mb-2 text-center">
              {facility.title}
            </h3>
            <p className="text-gray-100 text-center">{facility.description}</p>
          </motion.div>
        ))}
      </section> */}

      {/* Events Section */}
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-2">
        {clubPageData.events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-2xl shadow-lg p-8 hover:shadow-red-200 transition-transform duration-300 hover:scale-105 flex flex-col border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-cyan-200 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-300 font-semibold">{event.date}</p>
            <p className="text-gray-100 mt-2">{event.description}</p>
          </motion.div>
        ))}
      </section> */}

      {/* Example: Services Section with dark background */}
      {/* <ServicesSection services={[]} background="bg-bgThemeDark" /> */}

      {/* Contact Section */}
      {/* <motion.section
        style={{ background: "oklch(0.18 0 0)" }}
        className="text-white text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-3xl font-bold mb-6">Get in Touch</h4>
        <p className="text-lg mb-6">Have questions? We&apos;re here to help. Reach out to us today!</p>
        <button
          className="bg-white text-cyan-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </motion.section> */}
    </div>
  );
}
