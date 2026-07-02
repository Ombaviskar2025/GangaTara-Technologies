'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // increment by steps
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6 rounded-2xl glass-card flex flex-col items-center justify-center text-center">
      <h3 className="text-4xl sm:text-5xl font-poppins font-extrabold text-primary mb-2">
        {count}
        {suffix}
      </h3>
      <span className="text-sm font-bold text-dark dark:text-light mb-1">{label}</span>
      <span className="text-xs text-dark/60 dark:text-light/60">{description}</span>
    </div>
  );
};

export const Statistics: React.FC = () => {
  const stats = [
    { value: 1000, suffix: '+', label: 'Global Talents', description: 'Experienced engineers, architects, and designers.' },
    { value: 50, suffix: '+', label: 'Countries Covered', description: 'Enterprise operations across multiple continents.' },
    { value: 500, suffix: '+', label: 'Satisfied Clients', description: 'From fast-scaling startups to Fortune 500 giants.' },
    { value: 20, suffix: '+', label: 'Years Experience', description: 'Delivering robust technological solutions since 2006.' }
  ];

  return (
    <section className="py-20 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatItem 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                description={stat.description} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
