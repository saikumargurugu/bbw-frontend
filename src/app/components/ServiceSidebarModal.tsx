import React from "react";
// Types for restringing.json structure
interface RestringingOption {
  price: number;
  name: string;
  strings: string[];
}

interface RestringingFee {
  service: string;
  cost: number;
}

interface RestringingRecommendation {
  level: string;
  tension: string;
  description: string;
}

interface RestringingSection {
  title: string;
  points?: string[];
  options?: RestringingOption[];
  fees?: RestringingFee[];
  recommendations?: RestringingRecommendation[];
  tip?: string;
}

interface RestringingContactInfo {
  dropOffLocation: string;
  turnaround: string;
  contact: string;
}

interface RestringingData {
  title: string;
  description: string;
  sections: RestringingSection[];
  contactInfo: RestringingContactInfo;
}
import Image from "next/image";
import { sportySectionTheme } from "../styles/sportyTheme";

interface ServiceType {
  title: string;
  description: string;
  keyFeatures?: string[];
  config?: {
    url: string;
    name: string;
    newTab: boolean;
  };
  image?: string;
}

interface ServiceSidebarModalProps {
  open: boolean;
  service: ServiceType | null;
  onClose: () => void;
  idx?: number;
}


const ServiceSidebarModal: React.FC<ServiceSidebarModalProps> = ({ open, service, onClose, idx }) => {
  if (!open || !service) return null;

  // If the service has sections, treat it as a full data object (like restringing)
  const isFullData = Array.isArray((service as RestringingData).sections);
  const data: RestringingData | null = isFullData ? (service as RestringingData) : null;

  return (
    <>
      <div
        className={"fixed right-0 h-full w-full md:w-[70vw] md:max-w-[70vw] shadow-2xl z-[60] transition-all duration-300 flex flex-col border-l-8 border-red-700 rounded-l-2xl"}
        style={{
          ...sportySectionTheme.section.style,
          maxWidth: '100vw',
          width: '100vw',
          overflowY: 'auto',
          top: 64,
          height: `calc(100vh - 64px)`
        }}
      >
              <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-red-700 bg-gradient-to-b from-black/90 via-black/70 to-transparent rounded-tl-2xl"
                style={{
                  zIndex: 9999,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  paddingTop: 'env(safe-area-inset-top, 0px)'
                }}
              >
          <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-0 drop-shadow-xl font-sans uppercase" style={sportySectionTheme.font.title.style}>
            {isFullData && data ? data.title : service.title}
          </h2>
          <button
            className={sportySectionTheme.font.button.className + " text-2xl sm:text-3xl font-bold text-red-400 hover:text-white px-2 py-1 rounded-full bg-black/40 border-2 border-red-700 shadow-lg transition-all duration-200"}
            style={{...sportySectionTheme.font.button.style, zIndex: 3, position: 'relative'}}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-4 sm:p-8 flex-1 overflow-y-auto">
          {isFullData ? (
            <>
              <p className="text-base sm:text-lg md:text-xl text-white mb-6 font-medium drop-shadow font-sans" style={sportySectionTheme.font.description.style}>
                {data && data.description}
              </p>
              {data && data.sections.map((section: RestringingSection, i: number) => (
                <div key={i} className="mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-300 mb-2 flex items-center gap-2" style={sportySectionTheme.font.title.style}>{section.title}</h3>
                  {section.points && (
                    <ul className="list-disc pl-5 mb-2 text-white/90 text-sm sm:text-base md:text-lg">
                      {section.points.map((point: string, idx: number) => (
                        <li key={idx} className="mb-1">{point}</li>
                      ))}
                    </ul>
                  )}
                  {section.options && (
                    <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.options.map((opt: RestringingOption, idx: number) => (
                        <div key={idx} className="mb-4">
                          <div className="font-bold text-base sm:text-lg md:text-xl text-cyan-300 mb-1" style={sportySectionTheme.font.title.style}>{opt.name} <span className="text-red-400 font-extrabold">${opt.price}</span></div>
                          <ul className="list-disc pl-5 text-white/80 text-xs sm:text-base md:text-lg">
                            {opt.strings.map((str: string, sidx: number) => (
                              <li key={sidx}>{str}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.fees && (
                    <div className="mb-2">
                      <div className="font-bold text-base sm:text-lg md:text-xl text-yellow-300 mb-1" style={sportySectionTheme.font.title.style}>Additional Fees</div>
                      <ul className="list-disc pl-5 text-white/80 text-xs sm:text-base md:text-lg">
                        {section.fees.map((fee: RestringingFee, fidx: number) => (
                          <li key={fidx}>{fee.service}: <span className="text-red-400 font-bold">${fee.cost}</span></li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {section.recommendations && (
                    <div className="mb-2">
                      <div className="font-bold text-base sm:text-lg md:text-xl text-green-300 mb-1" style={sportySectionTheme.font.title.style}>Recommended Tensions</div>
                      <ul className="list-disc pl-5 text-white/80 text-xs sm:text-base md:text-lg">
                        {section.recommendations.map((rec: RestringingRecommendation, ridx: number) => (
                          <li key={ridx}><b>{rec.level}</b>: {rec.tension} – {rec.description}</li>
                        ))}
                      </ul>
                      {section.tip && (
                        <div className="mt-2 text-blue-300 text-xs sm:text-base md:text-lg"><b>Tip:</b> {section.tip}</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 p-4 bg-black/30 rounded-xl border border-red-700">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-2 flex items-center gap-2" style={sportySectionTheme.font.title.style}>Contact & Drop-off</h3>
                <p className="text-base sm:text-lg md:text-xl text-white mb-2 font-medium drop-shadow font-sans" style={sportySectionTheme.font.description.style}>
                  {data && data.contactInfo.dropOffLocation}<br/>
                  {data && data.contactInfo.turnaround}<br/>
                  <span className="text-blue-400">{data && data.contactInfo.contact}</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <Image
                src={service.image || `/images/image${(idx ? idx % 6 : 0) + 1}.jpg`}
                alt={service.title}
                width={400}
                height={240}
                className="object-cover rounded-xl mb-4 shadow-lg border-2 border-red-700"
              />
              <p className="text-sm sm:text-lg md:text-xl text-white mb-4 font-medium drop-shadow font-sans" style={sportySectionTheme.font.description.style}>
                {service.description}
              </p>
              {service.keyFeatures && (
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-base md:text-lg text-red-200 font-semibold">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              )}
              {service.config && (
                <a
                  href={service.config.url}
                  target={service.config.newTab ? '_blank' : '_self'}
                  className={sportySectionTheme.sharpButton.className + " mt-4 px-6 py-3 text-base sm:text-lg md:text-xl"}
                  style={{ ...sportySectionTheme.sharpButton.style, minWidth: 0, width: "auto", display: "inline-block" }}
                >
                  {service.config.name}
                </a>
              )}
            </>
          )}
        </div>
      </div>
      {/* Overlay for modal close */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />
    </>
  );
};

export default ServiceSidebarModal;
