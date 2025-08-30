import React from "react";
import Image from "next/image";
// Font styles from Banner/Home for sporty look
const bannerTitleClass = "text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase";
const bannerTitleStyle = { letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' };
const bannerDescClass = "text-white mb-6 max-w-2xl text-lg md:text-xl drop-shadow font-medium font-sans";
const bannerDescStyle = { fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.06em', lineHeight: 1.6 };
const bannerBtnClass = "bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-bold uppercase tracking-wider shadow-lg text-base md:text-lg border-2 border-red-700 transition-all duration-200";
const bannerBtnStyle = { fontFamily: 'Oswald, Montserrat, Arial, sans-serif', letterSpacing: '0.08em' };

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
    <div className={`w-full ${background} py-0 mt-12 scroll-smooth`}>
      <div className="flex flex-col w-full">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={
              `w-full flex flex-col md:flex-row items-stretch m-0 p-0 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`
            }
            style={{
              minHeight: "400px",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              scrollBehavior: "smooth"
            }}
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
              <h2
                className={bannerTitleClass + ' mb-2'}
                style={bannerTitleStyle}
              >
                {service.title}
              </h2>
              <p
                className={bannerDescClass + ' mb-4'}
                style={bannerDescStyle}
              >
                {service.description}
              </p>
              {service.config && (
                <div className="flex flex-row justify-start">
                  <a
                    href={service.config.url}
                    target={service.config.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={bannerBtnClass}
                    style={{ ...bannerBtnStyle, minWidth: 0, width: "auto", display: "inline-block" }}
                  >
                    {service.config.name}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}