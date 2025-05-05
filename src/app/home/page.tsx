// app/home/page.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white py-20 px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Our Badminton Club
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Train. Compete. Connect. Elevate your game with us.
        </motion.p>
        <Button className="text-base sm:text-lg bg-white text-cyan-700 hover:bg-gray-100 font-semibold rounded-xl px-6 py-2">
          Join Now
        </Button>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        <motion.div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2">Restringing</h3>
          <p className="text-gray-600">Top-quality restringing service with fast turnaround.</p>
        </motion.div>
        <motion.div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2">1-on-1 Training</h3>
          <p className="text-gray-600">Personal coaching sessions tailored to your skill level.</p>
        </motion.div>
        <motion.div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2">Court Hire</h3>
          <p className="text-gray-600">Book our world-class courts at your convenience.</p>
        </motion.div>
      </section>

      </div>
  );
}
