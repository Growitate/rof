import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030610] text-gray-400 py-12 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-yellow-400 border-2 border-black flex items-center justify-center p-1 shadow-[3px_3px_0px_#000000]">
                <img 
                  src="/assets/logo.png" 
                  alt="ROF Nutrition Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white font-heading tracking-wider uppercase block italic">
                  ROF <span className="text-blue-500">NUTRITION</span>
                </span>
                <span className="text-[10px] tracking-widest text-yellow-400 font-black uppercase block -mt-1">
                  REAL OVER FAKE
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-300 leading-relaxed">
              Premium pre-workout nutrition built for intermediate and advanced athletes who demand clean formulas and real results.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-heading">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
              </li>
              <li>
                <a href="#why-rof" className="hover:text-yellow-400 transition-colors">Why ROF?</a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-yellow-400 transition-colors">Flavors</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-heading">
              FOLLOW US
            </h4>
            <a 
              href="https://instagram.com/Fitboxx_Nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-black bg-pink-400 hover:bg-pink-300 px-3.5 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000] transition-all"
            >
              <Instagram className="w-4 h-4 text-black" />
              <span>Fitboxx_Nutrition</span>
            </a>
          </div>

          {/* Col 4: Real Over Fake Stamp */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <img 
              src="/assets/real_over_fake_stamp.png" 
              alt="Real Over Fake Stamp" 
              className="h-16 w-auto object-contain filter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-[11px] font-black italic tracking-widest text-yellow-400 uppercase mt-2 font-heading">
              REAL OVER FAKE
            </span>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-900 text-center text-xs text-gray-400 font-bold">
          <p>© 2025 ROF NUTRITION. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
