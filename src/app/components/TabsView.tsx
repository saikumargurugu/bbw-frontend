import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import AcademyTermInfo, { AcademyTermInfoProps } from './AcademyTermInfo';
import PersonalTraining, { PersonalTrainingInfo } from './PersonalTraining';

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
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box
      className="rounded-2xl shadow-lg p-6 mt-12"
      sx={{
        background: 'linear-gradient(135deg, #b91c1c 60%, #7f1d1d 100%)', // red gradient
        border: '1px solid #7f1d1d',
      }}
    >
      <Tabs
        value={activeTab}
        onChange={(_, v) => setActiveTab(v)}
        textColor="inherit"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2, borderRadius: 2, background: '#b91c1c', boxShadow: '0 2px 8px #0002' }}
      >
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            label={tab.label}
            sx={{
              color: activeTab === idx ? '#fff' : '#fee2e2',
              fontWeight: 'bold',
              mx: 1,
              borderRadius: 2,
              background: activeTab === idx ? '#7f1d1d' : 'transparent',
              transition: 'background 0.2s',
              '&:hover': {
                background: '#991b1b',
                color: '#fff',
              },
            }}
          />
        ))}
      </Tabs>
      {tabs.map((tab, idx) => (
        <Box key={idx} hidden={activeTab !== idx}>
          {activeTab === idx && (
            <Box>
              {tab.render && tab.info && (
                <Box>{getTabs(tab.render, tab.info)}</Box>
              )}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
