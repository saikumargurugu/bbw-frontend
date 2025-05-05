'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { Button, TextField, Typography, Grid, Box, Paper } from '@mui/material';
import Image from 'next/image';

const HeroData = [
  { image: '/images/contact/contact-hero.jpg', caption: 'Get in Touch with Us' },
  { image: '/images/image1.jpg', caption: 'Master the Smash' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
  { image: '/images/image3.jpg', caption: 'Precision and Power' },
  { image: '/images/image4.jpg', caption: 'Team Spirit' },
  { image: '/images/image5.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image6.jpg', caption: 'Join the Community' },
];

export default function ContactUsPage() {
  return (
    <div>
      <Carousel slides={HeroData} />

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24 grid md:grid-cols-1">
        <Paper className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 hover:shadow-xl transition-transform duration-300 hover:scale-105">
        <Typography className="text-7xl sm:text-8xl font-extrabold tracking-tight text-cyan-700 dark:text-cyan-300 mb-14 text-center">
  Get in Touch
</Typography>



          <form className="flex flex-col gap-6">
  <TextField
    label="Full Name"
    variant="outlined"
    fullWidth
    required
    color="primary"
    className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 transition-all px-6 py-4"
  />
  <TextField
    label="Email Address"
    variant="outlined"
    type="email"
    fullWidth
    required
    color="primary"
    className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 transition-all px-6 py-4"
  />
  <TextField
    label="Message"
    variant="outlined"
    fullWidth
    multiline
    rows={5}
    required
    color="primary"
    className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 transition-all px-6 py-4"
  />
  <Box className="mt-10 text-center">
    <Button
      variant="contained"
      color="primary"
      type="submit"
      className="py-5 text-lg w-full bg-cyan-700 hover:bg-cyan-600 rounded-xl transition-all"
    >
      Send Message
    </Button>
  </Box>
</form>

        </Paper>
      </section>

      {/* Our Location Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24 grid gap-10 md:grid-cols-2">
        <Paper className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <Typography variant="h6" className="font-bold text-cyan-700 mb-4">Our Address</Typography>
          <Typography className="text-gray-600 dark:text-gray-300">123 Badminton Street, Sports City, SC 56789</Typography>
          <Typography className="mt-4 text-gray-600 dark:text-gray-300">Call us: +123 456 789</Typography>
          <Typography className="mt-4 text-gray-600 dark:text-gray-300">Email: contact@badmintonclub.com</Typography>
        </Paper>
        <Paper className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <Typography variant="h6" className="font-bold text-cyan-700 mb-4">Our Location Map</Typography>
          <iframe
            width="100%"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1196243762645!2d144.9630583151767!3d-37.81362787975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d46daed0479%3A0x5045675218ce1e0!2sFlinders%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1633518753527!5m2!1sen!2sau"
          />
        </Paper>
      </section>
    </div>
  );
}
