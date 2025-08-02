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

interface ServicesSectionProps {
  services: ServiceType[];
  background?: string; // Accepts Tailwind class or CSS color
}

export default function ServicesSection({
  services,
    background = "bg-bgThemeDark",
}: ServicesSectionProps) {
  return (
    <div className={`w-full ${background} py-0 mt-12 transition-all duration-700 ease-in-out scroll-smooth`}>
      <div className="flex flex-col w-full transition-all duration-700 ease-in-out">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className={`
              w-full flex flex-col md:flex-row items-stretch m-0 p-0 transition-all duration-700 ease-in-out
              ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
            style={{
              minHeight: "400px",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              scrollBehavior: "smooth"
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-80 md:h-[520px]">
              <Image
                src={service.image || `/images/image${(idx % 6) + 1}.jpg`}
                alt={service.title}
                fill
                className="object-cover w-full h-full"
                style={{ borderRadius: 0 }}
              />
            </div>
            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/10 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-2 drop-shadow">{service.title}</h2>
              <p className="text-base md:text-lg text-gray-200 mb-4 drop-shadow">{service.description}</p>
              {service.config && (
                <div className="flex flex-row justify-start">
                  <a
                    href={service.config.url}
                    target={service.config.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition text-sm"
                    style={{ minWidth: 0, width: "auto", display: "inline-block" }}
                  >
                    {service.config.name}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}