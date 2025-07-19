import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceType {
  title: string;
  description: string;
  config?: {
    url: string;
    name: string;
    newTab: boolean;
  };
  image?: string;
}

// const serviceVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } // Use cubic-bezier easing
//   },
// };

export default function ServicesSection({ services }: { services: ServiceType[] }) {
  return (
    <div className="w-full px-[8%] py-12 space-y-16 bg-gradient-to-br from-cyan-50 via-white to-red-50">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 rounded-3xl shadow-lg bg-white/80 backdrop-blur-md p-6 md:p-12 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // variants={serviceVariants}
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={
                service.image ||
                `/images/image${(idx % 6) + 1}.jpg`
              }
              alt={service.title}
              width={700}
              height={400}
              className="rounded-2xl object-cover w-full h-64 md:h-96 shadow-xl"
            />
          </motion.div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-cyan-700 mb-4">{service.title}</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">{service.description}</p>
            {service.config && (
              <a
                href={service.config.url}
                target={service.config.newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-700 transition text-sm self-end mt-2"
                style={{ alignSelf: "flex-end" }}
              >
                {service.config.name}
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}