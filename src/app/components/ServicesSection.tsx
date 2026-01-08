import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { sportySectionTheme } from "../styles/sportyTheme";
import ServiceSidebarModal from "./ServiceSidebarModal";
import restringingData from '../pages/restringing.json';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// Font styles from Banner/Home for sporty look
const bannerTitleClass = "text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase";
const bannerTitleStyle = { letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' };
const bannerDescClass = "text-white mb-6 max-w-2xl text-lg md:text-xl drop-shadow font-medium font-sans";
const bannerDescStyle = { fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.06em', lineHeight: 1.6 };
// const bannerBtnClass = "bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-bold uppercase tracking-wider shadow-lg text-base md:text-lg border-2 border-red-700 transition-all duration-200";
// const bannerBtnStyle = { fontFamily: 'Oswald, Montserrat, Arial, sans-serif', letterSpacing: '0.08em' };

interface ServiceType {
  title: string;
  description?: string;
  keyFeatures?: string[]; // Added keyFeatures property
  config?: {
    url: string;
    name: string;
    type?: string;
    dataSource?: string;
    newTab: boolean;
  };
  image?: string;
  fitImage?: boolean;
}

interface ServicesSectionProps {
  services: ServiceType[];
  background?: string; // Accepts Tailwind class or CSS color
}

export default function ServicesSection({
  services,
  background = "bg-bgThemeDark",
}: ServicesSectionProps) {
  const router = useRouter();
  const [openServiceIdx, setOpenServiceIdx] = useState<number | null>(null);
  const [openServiceDetails, setOpenServiceDetails] = useState<any>(null);
  const [imageAspect, setImageAspect] = useState<{[key: number]: 'portrait' | 'landscape'}>({});

  const getServiceDetails =(service:ServiceType)=>{
    switch(service.config && service.config.dataSource){
      case 'restringing':
        setOpenServiceDetails(restringingData);
    } 
  }

  return (
    <div className={`w-full ${background} py-0 mt-12 scroll-smooth`}>
      <div className="flex flex-col w-full">
        {services.map((service, idx) => (
          <div
            key={service.title}
className={`w-full flex flex-col md:flex-row items-stretch m-0 p-0 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}            style={{
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
                className="w-full h-full"
                style={{
                  borderRadius: 0,
                  objectFit: service.fitImage ? 'cover' : (imageAspect[idx] === 'portrait' ? 'contain' : 'cover'),
                  objectPosition: 'center'
                }}
                onLoadingComplete={(img) => {
                  setImageAspect((prev) => ({
                    ...prev,
                    [idx]: img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape'
                  }));
                }}
              />
            </div>
            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col h-full bg-white/10 backdrop-blur-md border border-white/10 p-8 justify-between md:min-h-[520px] md:max-h-[520px]">
              {/* Heading at top */}
              <div>
                <h2
                  className={sportySectionTheme.font.title.className + ' mb-2'}
                  style={{ ...sportySectionTheme.font.title.style, color: '#ef4444' ,
                    fontSize: '2rem'
                  }}
                >
                  {service.title}
                </h2>
              </div>
              {/* Content in the middle, justified */}
              <div className="flex-1 flex flex-col justify-center">
                <p
                  className={sportySectionTheme.font.description.className + ' mb-4'}
                  style={{
                    ...sportySectionTheme.font.description.style,
                    fontSize: '0.99rem',
                    textAlign: 'justify',
                    width: '100%',
                    maxWidth: 'none'
                  }}
                >
                  {service.description}
                </p>
                {service.keyFeatures && (
                <ul className="list-disc text-white mb-4">
                    {service.keyFeatures.map((feature, index) => (
                        // use ArrowRightIcon for each feature insdead of bullet point
                        <li key={index} className="flex items-center mb-1">
                          <ArrowRightIcon className="text-red-500 mr-2" />
                          <span style={{
                            fontSize:'1.2rem'
                          }}>{feature}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              {/* Buttons at the bottom */}
              <div className="flex flex-row gap-3 justify-start mt-4">
                {service.config  && (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      if (service.config?.newTab) {
                        if (typeof window !== 'undefined') {
                          window.open(service.config.url, '_blank');
                        }
                      } else if (service.config?.type === 'sidebar') {
                        setOpenServiceIdx(idx);
                        getServiceDetails(service);
                      } else if (service.config) {
                        router.push(service.config.url);
                      }
                      else {
                        router.push('/');
                      }
                    }}
                    href={service.config.url}
                    className={sportySectionTheme.font.button.className + ' ' + sportySectionTheme.sharpButton.className}
                    style={{
                      ...sportySectionTheme.font.button.style,
                      ...sportySectionTheme.sharpButton.style,
                      minWidth: 0,
                      width: "auto",
                      display: "inline-block",
                      fontFamily: sportySectionTheme.font.button.style.fontFamily,
                      letterSpacing: sportySectionTheme.font.button.style.letterSpacing
                    }}
                  >
                    {service.config.name}
                  </a>
                )}
              </div>
              {/* Sidebar Modal is now rendered outside the map for full-screen overlay */}
            </div>
          </div>
        ))}
      {/* Render the sidebar modal once, outside the map, for proper fullscreen overlay */}
      <ServiceSidebarModal
        open={openServiceIdx !== null}
        service={openServiceDetails}
        onClose={() => {
          setOpenServiceDetails(null);
          setOpenServiceIdx(null);
        }}
        idx={openServiceIdx ?? undefined}
      />
      </div>
    </div>
  );
}