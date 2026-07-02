'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, MapPin } from 'lucide-react';

interface Hub {
  id: string;
  name: string;
  role: string;
  staff: string;
  coords: { x: number; y: number }; // Percentage coords for absolute positioning on SVG canvas
}

export const GlobalPresence: React.FC = () => {
  const hubs: Hub[] = [
    { id: 'h1', name: 'New York City', role: 'Americas Hub', staff: '250+ Engineers', coords: { x: 26, y: 38 } },
    { id: 'h2', name: 'Munich', role: 'EMEA Headquarters', staff: '400+ Architects', coords: { x: 49, y: 33 } },
    { id: 'h3', name: 'Bangalore', role: 'APAC Tech Center', staff: '300+ Developers', coords: { x: 72, y: 55 } },
    { id: 'h4', name: 'Tokyo', role: 'APAC Sales & AI', staff: '80+ Specialists', coords: { x: 86, y: 38 } },
    { id: 'h5', name: 'Sydney', role: 'Oceania Support', staff: '40+ Agents', coords: { x: 90, y: 78 } }
  ];

  const [hoveredHub, setHoveredHub] = useState<Hub | null>(null);

  return (
    <section className="py-24 bg-light/50 dark:bg-dark/40 border-y border-light/10 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Globe2 className="w-3.5 h-3.5" /> Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Our Global Operations
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            With key innovation labs and regional offices located across major technological hubs, we deliver 24/7 client service globally.
          </p>
        </div>

        {/* Dotted Interactive Map Container */}
        <div className="relative w-full aspect-[2/1] rounded-3xl glass-panel border border-light/20 dark:border-white/5 bg-slate-900/5 dark:bg-slate-900/30 overflow-hidden p-6 sm:p-12">
          
          {/* Futuristic grid background lines */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          {/* SVG Map Lines (Stylized coordinates) */}
          <svg viewBox="0 0 1000 500" className="w-full h-full text-dark/10 dark:text-light/10 fill-current relative z-0">
            {/* Outline of simplified continents */}
            <path d="M150,150 L200,100 L250,120 L300,100 L320,150 L280,200 L240,250 L200,280 L180,220 Z" /> {/* North America */}
            <path d="M200,280 L230,320 L240,380 L220,430 L200,410 L180,350 Z" /> {/* South America */}
            <path d="M420,130 L480,100 L530,120 L550,180 L480,220 L440,180 Z" /> {/* Europe */}
            <path d="M450,220 L500,220 L550,260 L540,320 L500,380 L470,350 L460,280 Z" /> {/* Africa */}
            <path d="M530,120 L650,80 L750,100 L850,150 L880,220 L800,280 L700,250 L600,200 L550,180 Z" /> {/* Asia */}
            <path d="M800,350 L840,360 L860,400 L840,420 L780,390 Z" /> {/* Australia */}
          </svg>

          {/* Glowing Hub Points */}
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: `${hub.coords.y}%`, left: `${hub.coords.x}%` }}
              onMouseEnter={() => setHoveredHub(hub)}
              onMouseLeave={() => setHoveredHub(null)}
            >
              {/* Ripple Ring */}
              <div className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary animate-ping opacity-60" />
              
              {/* Core dot */}
              <div className="w-3.5 h-3.5 rounded-full bg-primary border-2 border-white dark:border-dark shadow-md group-hover:bg-secondary group-hover:scale-125 transition-all" />
            </div>
          ))}

          {/* Tooltip drawer */}
          <AnimatePresence>
            {hoveredHub && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute z-20 top-6 left-6 p-5 rounded-2xl glass-panel border border-primary/20 bg-light/95 dark:bg-dark/95 backdrop-blur-md shadow-2xl flex items-start gap-3 w-64 pointer-events-none"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-dark dark:text-light mb-1">{hoveredHub.name}</h4>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-wider mb-2">{hoveredHub.role}</p>
                  <p className="text-[11px] text-dark/60 dark:text-light/60">{hoveredHub.staff}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map Legend */}
          <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-white/5 border border-white/10 dark:bg-dark/40 dark:border-white/5 text-[9px] uppercase tracking-wider text-dark/60 dark:text-light/60 font-semibold z-10">
            Hover dots to show hub telemetry
          </div>
        </div>

      </div>
    </section>
  );
};
