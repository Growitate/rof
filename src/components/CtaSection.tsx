import React from 'react';
import { MessageCircle, Phone, Instagram, Flame } from 'lucide-react';

interface CtaSectionProps {
  onOpenOrderModal: (product?: string, size?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="contact" className="relative bg-[#060b18] py-16 md:py-20 overflow-hidden border-t-4 border-black">
      
      {/* Background Halftone Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left CTA Text & Order Button */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block bg-yellow-400 border-3 border-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest text-black shadow-[4px_4px_0px_#000000] transform -rotate-2">
              🚀 TIME TO UNLEASH
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold italic tracking-tight font-heading text-white uppercase leading-tight comic-stroke">
              READY TO <span className="text-blue-500">LEVEL UP?</span>
            </h2>
            <p className="text-gray-200 font-bold text-base sm:text-lg">
              Choose real. Choose ROF.
            </p>
            <div>
              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-black text-xl uppercase tracking-wider border-3 border-black shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all transform active:translate-y-1"
              >
                <span>ORDER NOW</span>
                <MessageCircle className="w-6 h-6 fill-current text-black" />
              </button>
            </div>
          </div>

          {/* Center Peeking Wolf Graphic */}
          <div className="flex justify-center relative -mb-16 lg:mb-0">
            <img 
              src="/assets/peeking_wolf.png" 
              alt="ROF Peeking Wolf Mascot" 
              className="h-44 sm:h-56 object-contain filter drop-shadow-[8px_12px_16px_rgba(0,0,0,0.9)] transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Contact Info Cartoon Cards */}
          <div className="space-y-3 text-center lg:text-right flex flex-col items-center lg:items-end">
            <span className="bg-yellow-400 border-2 border-black px-3.5 py-1 rounded-xl text-black font-black text-xs tracking-widest uppercase font-heading shadow-[3px_3px_0px_#000000]">
              GET IN TOUCH
            </span>
            <div className="space-y-3 w-full max-w-xs">
              <a 
                href="https://wa.me/919582867986?text=Hi%20ROF%20Nutrition!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-end gap-3 bg-white text-black font-black text-base px-4 py-3 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] transition-all"
              >
                <Phone className="w-5 h-5 text-blue-600 fill-current" />
                <span>9582867986</span>
              </a>
              <a 
                href="https://instagram.com/Fitboxx_Nutrition" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-end gap-3 bg-pink-100 text-black font-black text-base px-4 py-3 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] transition-all"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
                <span>Fitboxx_Nutrition</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
