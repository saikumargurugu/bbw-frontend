import React from "react";
import { useRouter } from "next/navigation";

interface ServiceConfig {
  url: string;
  name: string;
  newTab: boolean;
}

interface Service {
  title: string;
  description: string;
  config: ServiceConfig;
}

export default function ServicesSection({ services }: { services: Service[] }) {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="relative bg-white  rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-700  mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 ">{service.description}</p>
          <a
            href={service.config.url}
            target={service.config.newTab ? "_blank" : "_self"}
            rel={service.config.newTab ? "noopener noreferrer" : undefined}
            className="absolute bottom-4 right-4 px-3 py-1 text-sm bg-cyan-700 text-white rounded-lg shadow hover:bg-cyan-800 transition"
            onClick={e => {
              e.stopPropagation();
              if (service.config.newTab) {
                window.open(service.config.url, "_blank");
              } else {
                e.preventDefault();
                router.push(service.config.url);
              }
            }}
          >
            {service.config.name}
          </a>
        </div>
      ))}
    </section>
  );
}