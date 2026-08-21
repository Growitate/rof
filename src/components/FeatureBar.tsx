import React from 'react';
import { Zap, Target, BicepsFlexed, Star, Leaf } from 'lucide-react';

export const FeatureBar: React.FC = () => {
  const features = [
    { icon: Zap, text: "EXPLOSIVE ENERGY", bg: "bg-yellow-400 text-black" },
    { icon: Target, text: "LASER FOCUS", bg: "bg-blue-400 text-black" },
    { icon: BicepsFlexed, text: "PUMP & ENDURANCE", bg: "bg-red-400 text-black" },
    { icon: Star, text: "CLEAN & EFFECTIVE", bg: "bg-green-400 text-black" },
    { icon: Leaf, text: "NO HIDDEN BLENDS", bg: "bg-purple-400 text-black" },
  ];

  return (
    <section className="bg-yellow-300 border-y-4 border-black py-5 shadow-lg relative overflow-hidden">
      
      {/* Halftone dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`${item.bg} border-3 border-black rounded-2xl py-2.5 px-3 flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#000000] transform hover:-translate-y-1 transition-all duration-200`}
              >
                <div className="p-1 rounded-lg bg-black text-white">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-black text-xs sm:text-sm tracking-wider uppercase italic font-heading">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
