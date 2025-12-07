import React, { useState } from 'react';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Collapsible: React.FC<{ question: string; answer: string; isOpen: boolean; link?: { url: string; name?: string; newTab?: boolean }; onToggle: () => void }> = ({ question, answer, isOpen, link, onToggle }) => {
  const router = useRouter();
  return (
  <div
    className={sportySectionTheme.card.className + ' border rounded-md overflow-hidden bg-gray-800'}
    style={{
      ...sportySectionTheme.card.style,
      width: '100%', // Auto resize for mobile
    //   maxWidth: '800px', // Limit width for larger screens
      margin: '0 auto', // Center align the div
      paddingBlock: '0.5rem',
      marginBlock: '0.9rem',
      boxShadow:'none'
    }}
  >
    <div
      onClick={onToggle}
      className="cursor-pointer px-4 py-2 flex items-center justify-start  hover:bg-gray-800 w-full"
      style={{
        fontFamily: sportySectionTheme.font.title.style.fontFamily,
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#f5f5f5',
        letterSpacing: '0.05em',
      }}
    >
      <span style={{ display: 'block', width: '100%', textAlign: 'left' }}>{question}</span>
      {isOpen ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
    </div>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden w-full"
    >
      <div
        className={sportySectionTheme.font.description.className + ' px-4 py-2 text-left flex items-center gap-2'}
        style={{
          ...sportySectionTheme.font.description.style,
          color: '#f5f5f5',
          textAlign: 'left',
          width: '100%',
          fontSize: '0.875rem',
        }}
      >
        <span style={{width: '100%', display: 'inline-block'}}>{answer}
        {link && (
          <a
            href={link.url}
            target={link.newTab ? '_blank' : '_self'}
            rel={link.newTab ? 'noopener noreferrer' : undefined}
            className="text-cyan-400 underline hover:text-cyan-600 ml-2"
            onClick={e => {
              if (!link.newTab) {
                e.preventDefault();
                // Use router for navigation
                if (typeof window !== 'undefined') {
                  if (router) router.push(link.url);
                  else window.location.href = link.url;
                }
              }
            }}
          >
            {link.name || 'Go'}
          </a>
        )}
        </span> 
      </div>
    </motion.div>
  </div>
);
}

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full mb-4" id="#FAQ">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search FAQs..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
        style={{
          fontFamily: sportySectionTheme.font.description.style.fontFamily,
          fontSize: '1rem',
        }}
      />
    </div>
  );
};

const FAQ: React.FC<{ data: { type: string; name: string; acceptedAnswer: { type: string; text: string }, link?: { url: string; name: string; newTab: boolean } }[] }> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className={'mx-auto p-4'} style={{ width: '100%', maxHeight: '500px', overflowY: 'auto' }}>
      <h2 className={sportySectionTheme.font.title.className + ' text-center mb-6'} style={sportySectionTheme.font.title.style}>
        Frequently Asked Questions
      </h2>
      <SearchBar onSearch={setSearchQuery} />
      {filteredData.map((item, index) => (
        <Collapsible
          key={index}
          question={item.name}
          answer={item.acceptedAnswer.text}
          isOpen={openIndex === index}
          onToggle={() => toggleFAQ(index)}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default FAQ;
