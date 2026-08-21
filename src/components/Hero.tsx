import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: (product?: string, size?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#060b18]">
      
      {/* ========================================================
          MOBILE HERO LAYOUT (Entire Image Visible, 0% Cropping, Natural Scroll)
          ======================================================== */}
      <div className="block md:hidden relative w-full aspect-[473/1024] max-w-full">
        {/* Mobile Background Image (100% Entire Image Shown) */}
        <img 
          src="/assets/hero_bg_mobile.png" 
          alt="ROF Nutrition Mobile Hero Background" 
          className="w-full h-full object-fill block"
        />

        {/* Mobile Text Content Overlay */}
        <div className="absolute inset-0 z-10 pt-20 px-4 flex flex-col items-center justify-start text-center space-y-3">
          
          {/* Main Comic Title */}
          <div className="space-y-0.5 pt-2">
            <h1 className="text-4xl xs:text-5xl font-extrabold italic tracking-tight font-heading leading-tight uppercase select-none">
              <span className="block text-gray-900 drop-shadow-[0_3px_6px_rgba(255,255,255,0.9)] comic-stroke">
                REAL
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-700 drop-shadow-[0_3px_6px_rgba(255,255,255,0.9)] comic-stroke">
                OVER
              </span>
              <span className="block text-gray-900 drop-shadow-[0_3px_6px_rgba(255,255,255,0.9)] comic-stroke">
                FAKE
              </span>
            </h1>
          </div>

          {/* Badge: PRE-WORKOUT WITH PROPER KNOWLEDGE */}
          <div className="inline-block">
            <div className="bg-yellow-400 text-black border-2 border-black font-black px-3 py-1.5 text-[10px] xs:text-xs uppercase italic tracking-wider shadow-[3px_3px_0px_#000000] rounded-xl transform -rotate-1">
              PRE-WORKOUT WITH PROPER KNOWLEDGE
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-gray-900 font-extrabold text-xs xs:text-sm tracking-wide leading-snug drop-shadow-sm">
            <p>Engineered for athletes.</p>
            <p>Built for results.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5 pt-2 w-full max-w-[260px]">
            {/* SHOP NOW Button */}
            <button
              onClick={() => onOpenOrderModal('ROF PRE LEVEL 7', '60 SERVINGS')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
            >
              <span>SHOP NOW</span>
              <ShoppingCart className="w-4 h-4" />
            </button>

            {/* KNOW MORE Button */}
            <a
              href="#products"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/95 hover:bg-white text-black font-black text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
            >
              <span>KNOW MORE</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* ========================================================
          DESKTOP HERO LAYOUT (16:9 Aspect Ratio)
          ======================================================== */}
      <div className="hidden md:flex relative w-full aspect-[16/9] items-center justify-center pt-32 pb-16">
        {/* Desktop Banner Image */}
        <img 
          src="/assets/hero_bg.jpg" 
          alt="ROF Nutrition Desktop Hero Background" 
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        />

        {/* Desktop Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-6 text-left">
            
            {/* Title */}
            <div className="space-y-1">
              <h1 className="text-7xl lg:text-8xl font-extrabold italic tracking-tight font-heading leading-none uppercase select-none">
                <span className="block text-gray-900 drop-shadow-[0_4px_8px_rgba(255,255,255,0.9)] comic-stroke">
                  REAL
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-700 drop-shadow-[0_4px_8px_rgba(255,255,255,0.9)] comic-stroke">
                  OVER
                </span>
                <span className="block text-gray-900 drop-shadow-[0_4px_8px_rgba(255,255,255,0.9)] comic-stroke">
                  FAKE
                </span>
              </h1>
            </div>

            {/* Badge */}
            <div className="inline-block">
              <div className="bg-yellow-400 text-black border-3 border-black font-black px-5 py-2 text-base uppercase italic tracking-wider shadow-[4px_4px_0px_#000000] rounded-xl transform -rotate-1">
                PRE-WORKOUT WITH PROPER KNOWLEDGE
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-gray-900 font-extrabold text-lg tracking-wide leading-relaxed space-y-1 drop-shadow-sm">
              <p>Engineered for athletes.</p>
              <p>Built for results.</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => onOpenOrderModal('ROF PRE LEVEL 7', '60 SERVINGS')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg tracking-wider uppercase border-3 border-black shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] active:translate-y-1 transition-all cursor-pointer min-h-[52px]"
              >
                <span>SHOP NOW</span>
                <ShoppingCart className="w-5 h-5" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-gray-100 text-black font-black text-lg tracking-wider uppercase border-3 border-black shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] active:translate-y-1 transition-all cursor-pointer min-h-[52px]"
              >
                <span>KNOW MORE</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
