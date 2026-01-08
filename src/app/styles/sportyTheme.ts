// sportyTheme.ts
// Theme object for the About Us section's sporty background and card style

// Define a variable for the font family
const sportyFontFamily = 'Roboto, sans-serif';

export const sportySectionTheme = {
  section: {
    className:
      'w-full px-2 sm:px-4 md:px-0 py-10 sm:py-16 md:py-20 bg-[linear-gradient(120deg,_#111_55%,_#c53030_55%)] flex flex-col items-center shadow-2xl relative overflow-hidden',
    style: {
      animation: 'fadeIn 1.2s cubic-bezier(0.4,0,0.2,1)',
      background: 'linear-gradient(120deg, #111 55%, #c53030 55%)'
    },
  },
  accent: {
    className: 'hidden md:block absolute -left-24 top-0 h-full w-1/2 z-0',
    style: {
      background: 'linear-gradient(120deg, #c53030 0%, #c53030cc 60%, transparent 100%)',
      transform: 'skewX(-18deg)',
      filter: 'blur(2px)'
    },
  },
  card: {
    className:
      'bg-black/80 border-l-8 border-red-700 rounded-xl shadow-xl px-3 py-4 sm:px-6 sm:py-10 md:px-12 md:py-14 flex-1 flex flex-col items-center relative',
    style: {
      boxShadow: '0 8px 40px 0 #000a, 0 1.5px 0 #c53030'
    },
  },
  font: {
    title: {
      className: 'text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase',
      style: { letterSpacing: '0.04em', fontFamily: sportyFontFamily }
    },
    description: {
      className: 'text-white mb-4 max-w-xl text-sm sm:text-lg md:text-2xl drop-shadow font-medium font-sans',
      style: { fontFamily: sportyFontFamily, letterSpacing: '0.06em', lineHeight: 1.6 }
    },
    button: {
      className: 'bg-red-600 hover:bg-red-600 text-white px-4 py-2 sm:px-7 sm:py-3 rounded-md font-bold uppercase tracking-wider shadow-lg text-xs sm:text-sm md:text-base border-2 border-red-700 transition-all duration-200',
      style: { 
        fontFamily: sportyFontFamily, 
        letterSpacing: '0.08em',
        padding: '0.5em 1em' // Increased padding for better spacing on mobile
      }
    }
  },
  sharpButton: {
    className: 'bg-gradient-to-br from-red-600 to-red-500 hover:bg-gradient-to-red hover:from-red-600 hover:to-black text-white px-6 py-3 sm:px-10 sm:py-3 font-extrabold uppercase tracking-widest shadow-xl text-xs sm:text-base md:text-lg transition-all duration-1000 outline-none focus:ring-4 focus:ring-red-400 active:scale-98',
    style: {
      fontFamily: 'Oswald, Montserrat, Arial, sans-serif',
      letterSpacing: '0.14em',
      padding: '0.75rem 1.5rem',
      backgroundSize: '200% auto',
      transition: 'all 1s ease-in-out',
      backgroundPosition: 'left center'
      // Removed clipPath for rectangle shape
    }
  }
};

// Usage:
// import { sportySectionTheme } from '@/app/styles/sportyTheme';
// <section className={sportySectionTheme.section.className} style={sportySectionTheme.section.style}>...</section>
// <div className={sportySectionTheme.accent.className} style={sportySectionTheme.accent.style} />
// <div className={sportySectionTheme.card.className} style={sportySectionTheme.card.style}>...</div>
