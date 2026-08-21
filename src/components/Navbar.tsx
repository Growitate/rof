import React, { useState } from 'react';
import { Phone, Instagram, Menu, X, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (product?: string, size?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-blue-950/80 border border-blue-400/40 flex items-center justify-center p-1 shadow-lg shadow-blue-950/50 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/assets/logo.png" 
                alt="ROF Nutrition Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-gray-900 uppercase italic font-heading drop-shadow-md">
                ROF <span className="text-blue-600">NUTRITION</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-blue-700 font-bold uppercase -mt-1 drop-shadow-xs">
                REAL OVER FAKE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200 shadow-md">
            <a href="#home" className="text-xs font-extrabold tracking-wider text-gray-900 hover:text-blue-600 transition-colors uppercase">
              HOME
            </a>
            <a href="#products" className="text-xs font-extrabold tracking-wider text-gray-700 hover:text-blue-600 transition-colors uppercase">
              PRODUCTS
            </a>
            <a href="#why-rof" className="text-xs font-extrabold tracking-wider text-gray-700 hover:text-blue-600 transition-colors uppercase">
              WHY ROF?
            </a>
            <a href="#flavors" className="text-xs font-extrabold tracking-wider text-gray-700 hover:text-blue-600 transition-colors uppercase">
              FLAVORS
            </a>
            <a href="#contact" className="text-xs font-extrabold tracking-wider text-gray-700 hover:text-blue-600 transition-colors uppercase">
              CONTACT
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://instagram.com/Fitboxx_Nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-950/80 border border-pink-500/40 text-white hover:border-pink-500 transition-all text-xs font-bold shadow-md backdrop-blur-md"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Fitboxx_Nutrition</span>
            </a>

            <a 
              href="https://wa.me/919582867986?text=Hi%20ROF%20Nutrition!%20I%20want%20to%20know%20more%20about%20ROF%20PRE%20LEVEL%207."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold shadow-lg shadow-blue-900/40 border border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-white fill-current" />
              <span className="text-sm tracking-wide">9582867986</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2.5">
            <button 
              onClick={() => onOpenOrderModal()}
              className="px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>ORDER</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-900 bg-white/90 backdrop-blur-md border border-gray-300 focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060b18]/98 backdrop-blur-xl border-b-2 border-blue-600 px-5 pt-3 pb-8 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
            <span className="text-xs font-black tracking-widest text-blue-400 uppercase font-heading">
              NAVIGATION MENU
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-base font-black text-white hover:bg-blue-600/20 active:bg-blue-600/30"
          >
            🏠 HOME
          </a>
          <a 
            href="#products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-base font-black text-gray-200 hover:bg-blue-600/20 active:bg-blue-600/30"
          >
            ⚡ PRODUCTS
          </a>
          <a 
            href="#why-rof" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-base font-black text-gray-200 hover:bg-blue-600/20 active:bg-blue-600/30"
          >
            🛡️ WHY ROF?
          </a>
          <a 
            href="#flavors" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-base font-black text-gray-200 hover:bg-blue-600/20 active:bg-blue-600/30"
          >
            🍓 FLAVORS
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-base font-black text-gray-200 hover:bg-blue-600/20 active:bg-blue-600/30"
          >
            📞 CONTACT
          </a>
          
          <div className="pt-4 border-t border-blue-900/40 flex flex-col gap-3">
            <a 
              href="https://instagram.com/Fitboxx_Nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-pink-950/60 border border-pink-500/40 text-white font-black text-sm shadow-md"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Fitboxx_Nutrition</span>
            </a>
            <a 
              href="https://wa.me/919582867986?text=Hi%20ROF%20Nutrition!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/40"
            >
              <Phone className="w-4 h-4" />
              <span>Call / WhatsApp: 9582867986</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
