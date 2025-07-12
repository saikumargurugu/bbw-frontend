'use client';

import React, { useState } from 'react';
import Carousel from '@/app/components/Carousel';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission (API call, etc.)
    alert('Message sent!');
  };

  const contactData = {
    "heroSlides": [
      { "image": "/images/contact/contact-hero.jpg", "caption": "Get in Touch with Us" },
      { "image": "/images/image1.jpg", "caption": "Master the Smash" },
      { "image": "/images/image2.jpg", "caption": "Agility in Motion" }
    ],
    "formFields": [
      { "label": "Full Name", "type": "text", "name": "name", "required": true },
      { "label": "Email Address", "type": "email", "name": "email", "required": true },
      { "label": "Message", "type": "textarea", "name": "message", "required": true }
    ],
    "address": "39 Quilton Pl, Crestmead QLD 4132, Australia",
    "phone": "+61433300506",
    "email": "admin@badmintonbrisbane.com.au",
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8216875057965!2d153.06956077585127!3d-27.691905526211332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9147f2bb4d041d%3A0x290bdd13220b6c9b!2sBrisbane%20Badminton!5e0!3m2!1sen!2sau!4v1752287359564!5m2!1sen!2sau"
  }


  return (
    <div>
      <Carousel slides={contactData.heroSlides} />

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24 grid md:grid-cols-1">
        <Paper className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <Typography className="text-7xl sm:text-8xl font-extrabold tracking-tight text-cyan-700 dark:text-cyan-300 mb-14 text-center">
            Get in Touch
          </Typography>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {contactData.formFields.map((field) =>
              field.type === "textarea" ? (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  required={field.required}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  color="primary"
                  className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 transition-all px-6 py-4"
                />
              ) : (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  variant="outlined"
                  fullWidth
                  required={field.required}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  color="primary"
                  className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 transition-all px-6 py-4"
                />
              )
            )}
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
          <Typography className="text-gray-600 dark:text-gray-300">{contactData.address}</Typography>
          <Typography className="mt-4 text-gray-600 dark:text-gray-300">Call us: {contactData.phone}</Typography>
          <Typography className="mt-4 text-gray-600 dark:text-gray-300">Email: {contactData.email}</Typography>
        </Paper>
        <Paper className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <Typography variant="h6" className="font-bold text-cyan-700 mb-4">Our Location Map</Typography>
          <iframe
            width="100%"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            allowFullScreen
            src={contactData.mapSrc}
          />
        </Paper>
      </section>
    </div>
  );
}
