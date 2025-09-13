import React from 'react';
import { Box } from '@mui/material';
import AcademyTermInfo, { AcademyTermInfoProps } from './AcademyTermInfo';
import PersonalTraining, { PersonalTrainingInfo } from './PersonalTraining';
import { sportySectionTheme } from '../styles/sportyTheme';

interface TabConfig {
  label: string;
  columns?: string[];
  render?: string; // function/component name
  info?: AcademyTermInfoProps | PersonalTrainingInfo;
}


interface TabsViewProps {
  tabs: TabConfig[];
  renderers?: Record<string, () => React.ReactNode>;
}

const getTabs = (tabName: string, info: AcademyTermInfoProps | PersonalTrainingInfo) => {

    switch (tabName) {
      case 'academy':
        return <AcademyTermInfo {...info} />;
      case 'personalTraining':
        return <PersonalTraining info={info} />;
      default:
        // Default case if Coming soon  and contatct us for ant other specic information
        return <div className='bg-red-600' >Coming Soon</div>;
    }
}


export default function TabsView({ tabs }: TabsViewProps) {
  const [activeTab, setActiveTab] = React.useState<number|null>(null);

  return (
    <Box className="w-full flex flex-col items-center gap-10 mt-12">
      {/* Tab Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mx-auto justify-center">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 px-8 py-10 shadow-lg border-2 transition-all duration-200 text-2xl font-extrabold uppercase tracking-wider text-center
              ${activeTab === idx
                ? 'bg-gradient-to-br from-red-700 to-red-500 border-red-700 text-white scale-102 shadow-red-400/30'
                : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-red-200 hover:bg-red-900/40 hover:text-white'}
            `}
            style={{
              ...sportySectionTheme.font.title.style,
              minHeight: '110px',
              boxShadow: activeTab === idx ? '0 4px 24px 0 #c5303099, 0 1.5px 0 #c53030' : '0 2px 8px #0007',
              opacity: activeTab === idx ? 1 : 0.92,
              borderRadius: 0,
              clipPath: 'polygon(32px 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        {activeTab === null ? (
          <Box className="rounded-2xl shadow-xl bg-black/80 border-l-8 border-red-700 p-8 md:p-12 animate-fadeIn text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-wider" style={sportySectionTheme.font.title.style}>Choose a Program</h3>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto" style={sportySectionTheme.font.description.style}>
              Select one of the programs above to see details, schedules, and more information about our academy offerings.
            </p>
          </Box>
        ) : (
          tabs[activeTab] && tabs[activeTab].render && tabs[activeTab].info && (
            <Box className="animate-fadeIn">
              {getTabs(tabs[activeTab].render, tabs[activeTab].info)}
            </Box>
          )
        )}
      </div>
    </Box>
  );
}
