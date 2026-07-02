'use client';

import React from 'react';

export const TrustedBy: React.FC = () => {
  // 50+ Mock company names for corporate trust. We repeat them to build a continuous loop
  const companyNames = [
    'Microsoft', 'Oracle', 'IBM', 'Cisco', 'Salesforce', 'Intel', 'Dell', 'Accenture', 
    'Cognizant', 'Capgemini', 'SAP', 'Nvidia', 'Siemens', 'HP', 'AWS', 'Google Cloud',
    'Microsoft', 'Oracle', 'IBM', 'Cisco', 'Salesforce', 'Intel', 'Dell', 'Accenture', 
    'Cognizant', 'Capgemini', 'SAP', 'Nvidia', 'Siemens', 'HP', 'AWS', 'Google Cloud'
  ];

  return (
    <section className="py-12 bg-light/50 dark:bg-dark/40 border-y border-light/10 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <h3 className="text-[10px] uppercase tracking-widest text-dark/40 dark:text-light/40 font-bold">
          Trusted by Global Industry Leaders
        </h3>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="flex w-[200%] gap-12 items-center select-none overflow-hidden relative">
        {/* Left and Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-light dark:from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-light dark:from-dark to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 items-center shrink-0 min-w-full animate-marquee">
          {companyNames.map((name, idx) => (
            <span
              key={idx}
              className="text-lg sm:text-xl font-poppins font-black tracking-wider text-dark/20 dark:text-light/20 hover:text-primary dark:hover:text-primary transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
