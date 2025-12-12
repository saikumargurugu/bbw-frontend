'use client';

import React from 'react';
import { Avatar, CardContent, Typography } from '@mui/material';
import TabsView from '../components/TabsView';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
import Link from 'next/link';
import { motion } from "framer-motion";
import data from './academyContent.json';

const programs = data.academy.programs || [];
const coaches = data.academy.coaches || [];
const tabsView = data.academy.tabsView ? data.academy.tabsView : [];

export default function AcademyPage() {
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
        <div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
        <div className="w-full px-2 sm:px-8 mx-auto flex justify-center z-10" >
          <div className={sportySectionTheme.card.className} style={{ ...sportySectionTheme.card.style, width: '90%' }}>
            <h2
              className={sportySectionTheme.font.title.className + ' mb-8'}
              style={{ ...sportySectionTheme.font.title.style, textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
            >
              About the Academy
            </h2>
            <p
              className={  'my-1.5 py-1.5'}
              style={sportySectionTheme.font.description.style}
            >
              {data.academy.hero}
            </p>
            <div className="relative w-full flex flex-col gap-4 justify-start mt-1.5">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-black/70 border-l-8 border-red-700 rounded-xl shadow-xl px-6  md:px-10 md:py-8 w-full mx-auto text-left"
                  style={{
                    // Removed spread operator for sportySectionTheme.font.description.style
                    boxShadow: '0 8px 40px 0 #000a, 0 1.5px 0 #c53030',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    letterSpacing: '0.06em',
                    lineHeight: 1.6,
                    fontWeight: 'normal', // Ensure font weight is removed
                    fontSize: '0.1rem', // Apply reduced font size explicitly
                  }}
                >
                  <span className={sportySectionTheme.font.description.className + ' text-left'}
                      style={{ fontSize: '0.9rem' }} // Forcing the font size here
                  >
                    <strong>{program.title}:</strong> {program.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </motion.section>

      {/* Dynamic Tabs Table View Section */}
      {tabsView.length > 0 && (
  <div className="max-w-6xl mx-auto px-4 py-16 text-left">
          <TabsView tabs={tabsView} />
        </div>
      )}

      {/* Programs Section */}
      {/* {programs.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        {programs.map((program: { title: string; description: string }, idx: number) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-200 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-100">{program.description}</p>
          </motion.div>
        ))}
      </motion.section>
)} */}
      {/* Coaches Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
  <h3 className="text-3xl font-semibold text-cyan-200 mb-8 text-left">Meet Our Coaches</h3>
  <p className="text-lg text-gray-300 mb-6 text-left leading-relaxed">
          {coaches.description}
        </p>
  <div className="grid md:grid-cols-3 gap-8 text-left">
          {coaches.coaches.map((coach, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src={coach.image}
                  alt={coach.name}
                  sx={{ width: 110, height: 110, marginBottom: '1rem' }}
                />
                <Typography variant="h5" className="font-bold text-cyan-200">{coach.name}</Typography>
                {/* <Typography variant="body1" className="mt-2 text-gray-600">{coach.title}</Typography> */}
                {/* {coach.acheivements && (
                  <ul className="mt-4 text-gray-700 text-left text-sm list-disc list-inside">
                    {coach.acheivements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )} */}
              </CardContent>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        style={{ background: "oklch(0.18 0 0)" }}
        className="text-white text-left py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
  <h4 className="text-4xl font-bold mb-6 text-red-500 text-left">Ready to Join the Academy?</h4>
        <Link
          href="/academy/register"
          className={sportySectionTheme.sharpButton.className + ' inline-flex items-center'}
          style={{ ...sportySectionTheme.sharpButton.style, alignSelf: "center" }}
        >
          Register Now
        </Link>
        <div className="mt-8 text-lg text-left">
          <span>For more info, contact us at </span>
          <a href="mailto:admin@badmintonbrisbane.com.au" className="underline text-white font-bold">admin@badmintonbrisbane.com.au</a>
        </div>
      </motion.section>
    </div>
  );
}
