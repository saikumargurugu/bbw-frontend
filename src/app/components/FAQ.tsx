import React, { useState } from 'react';
import { sportySectionTheme } from '@/app/styles/sportyTheme';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Collapsible: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => (
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
        fontFamily: 'Montserrat, Arial, sans-serif',
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
        className={sportySectionTheme.font.description.className + ' px-4 py-2 text-left'}
        style={{
          ...sportySectionTheme.font.description.style,
          color: '#f5f5f5',
          textAlign: 'left', // Align text to the left
          width: '100%', // Ensure the answer takes the full width
          fontSize: '0.875rem', // Smaller font size for the answer
        }}
      >
        {answer}
      </div>
    </motion.div>
  </div>
);

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search FAQs..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
        style={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: '1rem',
        }}
      />
    </div>
  );
};

const FAQ: React.FC<{ data: { type: string; name: string; acceptedAnswer: { type: string; text: string } }[] }> = ({ data }) => {
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
        />
      ))}
    </div>
  );
};

export default FAQ;
