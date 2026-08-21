import React from 'react';

export const WhyChoose: React.FC = () => {
  const pillars = [
    {
      title: "REAL INGREDIENTS",
      subtitle: "No hidden blends.",
      img: "/assets/why_real_ingredients.png",
      badge: "100% CLEAN",
    },
    {
      title: "PROPER KNOWLEDGE",
      subtitle: "Backed by science.",
      img: "/assets/why_proper_knowledge.png",
      badge: "LAB TESTED",
    },
    {
      title: "MAX PERFORMANCE",
      subtitle: "Every rep counts.",
      img: "/assets/why_max_performance.png",
      badge: "HIGH PUMP",
    },
    {
      title: "MADE FOR ATHLETES",
      subtitle: "& Gym Goers.",
      img: "/assets/why_shaker.png",
      badge: "ATHLETE GRADE",
    },
  ];

  return (
    <section id="why-rof" className="py-12 sm:py-24 bg-[#080d1a] relative overflow-hidden border-t-4 border-black">
      
      {/* Halftone dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cartoon Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-16">
          <div className="inline-block bg-yellow-400 border-2 sm:border-3 border-black px-3.5 py-1 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest text-black shadow-[3px_3px_0px_#000000] transform -rotate-2">
            🛡️ THE ROF ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold italic tracking-wide uppercase font-heading text-white comic-stroke">
            WHY CHOOSE <span className="text-blue-500">ROF NUTRITION?</span>
          </h2>
        </div>

        {/* 4 Pillars Grid with Tight Mobile Image Frame Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-4 sm:p-6 border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] flex flex-col items-center text-center justify-between group transition-all duration-300 relative"
            >
              {/* Top Cartoon Sticker */}
              <div className="absolute -top-3 bg-yellow-400 border-2 border-black px-2.5 py-0.5 rounded-lg font-black text-[9px] sm:text-[10px] uppercase text-black shadow-[2px_2px_0px_#000000] z-20">
                {item.badge}
              </div>

              {/* Graphic Illustration Box (Sized Exactly to Image Size on Mobile) */}
              <div className="w-36 h-36 sm:w-full sm:h-48 rounded-2xl overflow-hidden my-2 sm:my-3 relative flex items-center justify-center bg-gray-900 border-2 sm:border-3 border-black shadow-inner p-1 mx-auto flex-shrink-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-0.5 w-full pt-1">
                <h3 className="text-lg sm:text-2xl font-black italic tracking-wide text-black uppercase font-heading leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-sm font-extrabold text-gray-800 tracking-wide">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
