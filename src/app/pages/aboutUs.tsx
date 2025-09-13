"use client";

import React from 'react';
import { Avatar, CardContent, Typography } from '@mui/material';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
import { motion } from "framer-motion";
import data from './dataBrisbaneBadminton.json';

const aboutHero: { title: string; description: string } = data.aboutUs?.hero || { title: '', description: '' };
const aboutSections: { title: string; content: string }[] = data.aboutUs?.sections || [];
const team: { name: string; image: string; acheivements?: string[] }[] = data.aboutUs?.team || [];
const aboutPoints: string[] = data.aboutUs?.sections.find(section => section.title === "Why Choose Brisbane Badminton?")?.Points || [];

// Filter out the "Why Choose Brisbane Badminton?" section to avoid duplication
const filteredSections = aboutSections.filter(section => section.title !== "Why Choose Brisbane Badminton?");

export default function AboutUsPage() {
  return (
    <div className="bg-bgThemeDark min-h-screen">
      {/* About Us Section */}
      <motion.section
        className={sportySectionTheme.section.className + ' !text-center'}
        style={sportySectionTheme.section.style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
        <div className="w-full px-2 sm:px-8 mx-auto flex justify-center z-10">
          <div className={sportySectionTheme.card.className} style={{ ...sportySectionTheme.card.style, width: '90%' }}>
            <h2
              className={sportySectionTheme.font.title.className + ' mb-8'}
              style={{ ...sportySectionTheme.font.title.style, textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
            >
              {aboutHero.title}
            </h2>
            <p
              className={sportySectionTheme.font.description.className + ' text-center text-sm md:text-base'}
              style={{ ...sportySectionTheme.font.description.style, textAlign: 'center', width: '100%', maxWidth: 'none' }}
            >
              {aboutHero.description}
            </p>
  

      {/* Points Section */}
      {aboutPoints.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-4 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-semibold text-cyan-200 mb-8 text-center">Why Choose Brisbane Badminton?</h3>
          <ul className="pl-5 text-gray-300 text-left">
            {aboutPoints.map((point, idx) => (
              <li
                key={idx}
                className="mb-2 list-none"
                dangerouslySetInnerHTML={{ __html: point }}
              ></li>
            ))}
          </ul>
        </motion.section>
      )}
        </div>
        </div>

      {/* Sections */}
      {filteredSections.map((section: { title: string; content: string }, idx: number) => (
        <motion.section
          key={idx}
          className="max-w-6xl mx-auto px-4 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3
            className="text-3xl font-semibold text-cyan-200 mb-8 text-center"
            style={sportySectionTheme.font.title.style}
          >
            {section.title}
          </h3>
          <div
            className="text-lg text-gray-300 mb-6 text-center leading-relaxed"
            style={sportySectionTheme.font.description.style}
            dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br>') }}
          ></div>
        </motion.section>
      ))}
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-3xl font-semibold text-cyan-200 mb-8 text-center">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member: { image: string; name: string; acheivements?: string[] }, idx: number) => (
            <motion.div
              key={idx}
              className="bg-white/10 shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 110, height: 110, marginBottom: '1rem' }}
                />
                <Typography variant="h5" className="font-bold text-cyan-200">{member.name}</Typography>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        style={{ background: "oklch(0.18 0 0)" }}
        className="text-white text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-4xl font-bold mb-6 text-red-500">Get in Touch</h4>
        <div className="mt-8 text-lg">
          <span>For more info, contact us at </span>
          <a href="mailto:info@badmintonbrisbane.com.au" className="underline text-white font-bold">info@badmintonbrisbane.com.au</a>
        </div>
      </motion.section>
    </div>
  );
}
