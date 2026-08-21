import React from 'react';
import { ShieldCheck, TestTube, Award, Leaf } from 'lucide-react';

export const QualityRibbon: React.FC = () => {
  const items = [
    {
      icon: Leaf,
      title: "CLEAN FORMULA",
      desc: "No fillers. Just real ingredients.",
      badge: "PURE"
    },
    {
      icon: TestTube,
      title: "SCIENCE BACKED",
      desc: "Formulated with research & knowledge.",
      badge: "RESEARCHED"
    },
    {
      icon: ShieldCheck,
      title: "SAFE & EFFECTIVE",
      desc: "Trusted by athletes everywhere.",
      badge: "TRUSTED"
    },
    {
      icon: Award,
      title: "PREMIUM QUALITY",
      desc: "High quality raw materials. Zero compromise.",
      badge: "MAX QUALITY"
    },
  ];

  return (
    <section className="bg-yellow-300 border-y-4 border-black py-8 shadow-lg relative overflow-hidden">
      
      {/* Halftone dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-4 border-3 border-black shadow-[5px_5px_0px_#000000] flex items-start gap-3.5 transform hover:-translate-y-1 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-blue-500 border-2 border-black text-white flex-shrink-0 shadow-[2px_2px_0px_#000000]">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-black text-base tracking-wide text-black font-heading uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-gray-800 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
