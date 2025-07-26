'use client';
import React, { useState } from 'react';
import Carousel from '@/app/components/Carousel';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroData } from './Home';

// --- Club Page Data JSON ---
const clubPageData = {
  about: {
    title: "About the Club",
    description: `Our club is dedicated to creating a friendly and supportive environment for badminton enthusiasts of all levels.
    Whether you're a beginner or an advanced player, you'll find the perfect place to grow your skills and enjoy the sport with others.`
  },
  qba: {
    title: "QBA Membership",
    description: `<strong>South Brisbane Badminton Inc.</strong> is proud to be affiliated with the <strong>Queensland Badminton Association (QBA)</strong>.
    Becoming a QBA member not only supports the growth of badminton in Queensland but also allows you to compete in official state-level tournaments and includes insurance coverage during these competitions.`,
    courtTitle: "Book Our Premium Courts",
    courtDescription: `Play on our <strong>badminton courts</strong>, featuring the <span class="text-red-700 font-bold">highest ceiling in Queensland</span>, <span class="text-cyan-700 font-bold">soft cushion flooring</span>, and the <span class="text-yellow-500 font-bold">brightest lights</span> for unmatched comfort, performance, and safety. With <strong>top-tier flooring, professional lighting, and quality equipment</strong>, our facility offers the perfect environment for both casual play and serious training.`,
    courtList: [
      "Singles & Doubles Matches",
      "Group Bookings",
      "Casual Practice & Competitive Play"
    ],
    bookingNote: `Reserve your court online for a <strong>smooth, hassle-free experience</strong>. Whether you're training, competing, or just having fun—South Brisbane Badminton Inc. is the place to be.`
  },
  terms: {
    title: "Terms and Conditions",
    items: [
      "All players must use only <b>BADMINTON SHOES</b> or <b>Non marking shoes</b> at Brisbane Badminton.",
      "People wearing shoes with black sole/bottom (including partially black) will not be allowed to play on our courts (no refunds of court booking).",
      "People wearing any other shoes which can make any colored marks (including white marks) on the mats will not be allowed to play on our courts.",
      "If you are unsure about your shoes, they are most likely Marking Shoes.",
      "Any breach of this rule will incur management fee start from $150 (Must pay before leaving the Center).",
      "<b>Court Arrangements:</b> Please note that courts for your booking may be adjusted for better utilisation of the facility. You'll be notified through the booking system if there are any changes. Kindly check your booking again on the day. If you do not wish to be moved, please notify us through the comment section upon making your bookings.",
      "All customers are obligated to step off the court at the end of your booking hours; Any extended time of using the court may be charged.",
      "<b>Please read our Booking Rules including Cancellation Policy.</b>",
      "<b>Please read our Terms and Conditions.</b>",
      "<b>No Outside coaches</b> are allowed to do any sort of coaching in Brisbane Badminton premises."
    ]
  },
  facilities: [
    {
      title: 'Indoor Courts',
      description: 'Play in our state-of-the-art indoor courts, designed for the best badminton experience.',
    },
    {
      title: 'QBA Club Members',
      description: 'Join our vibrant community of badminton enthusiasts and make new friends. Club memberships are open for all skill levels. Just $99 per year. Contact us to join and enjoy exclusive member benefits, priority court bookings, and access to club tournaments and socials.',
    },
    {
      title: 'Pro Shop',
      description: 'Get all your badminton gear and accessories from our well-stocked pro shop. We offer rackets, shoes, shuttlecocks, apparel, and expert advice for players of all levels.',
    },
  ],
  events: [
    {
      title: 'Academy Tournament',
      date: 'End of Every Trimester',
      description: 'Join our academy tournament to test your skills against fellow players. Open to all academy members, this event is a great opportunity to showcase your progress and compete in a friendly environment. Prizes for winners!',
    },
    {
      title: 'Club Socials',
      date: 'Every Day',
      description: 'A casual meet-up for members to socialize, play badminton, and have fun. Enjoy refreshments, friendly matches, and networking opportunities in a relaxed setting.',
    },
  ]
};

export default function ClubPage() {
  const router = useRouter();
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <Carousel slides={HeroData} />

      {/* About Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-6">
          {clubPageData.about.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {clubPageData.about.description}
        </p>
      </motion.section>

      {/* QBA Membership & Court Hire Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ background: "rgba(255,255,255,0.85)", borderRadius: "1.5rem", marginBottom: "2rem" }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">{clubPageData.qba.title}</h3>
        <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: clubPageData.qba.description }} />
        <h4 className="text-xl font-bold text-cyan-700 mb-2">{clubPageData.qba.courtTitle}</h4>
        <p className="text-lg text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: clubPageData.qba.courtDescription }} />
        <ul className="text-lg text-gray-700 mb-4 list-disc list-inside text-left max-w-xl mx-auto">
          {clubPageData.qba.courtList.map((item, idx) => (
            <li key={idx}><strong>{item}</strong></li>
          ))}
        </ul>
        <p className="text-lg text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: clubPageData.qba.bookingNote }} />
        <button
          className="mt-4 text-sm text-cyan-700 underline hover:text-red-700 transition"
          onClick={() => setOpenTerms(true)}
        >
          Terms and Conditions apply
        </button>
      </motion.section>

      {/* Terms & Conditions Modal */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-600"
              onClick={() => setOpenTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">{clubPageData.terms.title}</h2>
            <div className="text-gray-700 text-sm max-h-[60vh] overflow-y-auto space-y-3 text-left">
              <ul className="list-disc list-inside space-y-2">
                {clubPageData.terms.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Facilities Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-3">
        {clubPageData.facilities.map((facility, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-cyan-200 transition-transform duration-300 hover:scale-105 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2 text-center">
              {facility.title}
            </h3>
            <p className="text-gray-600 text-center">{facility.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-2">
        {clubPageData.events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-red-200 transition-transform duration-300 hover:scale-105 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-cyan-700 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 font-semibold">{event.date}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <motion.section
        style={{ background: "oklch(0.39 0.13 24.4)" }}
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
      </motion.section>
    </div>
  );
}
