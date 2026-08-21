import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductsProps {
  onOpenOrderModal: (product: string, size: string, flavor: string, price: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenOrderModal }) => {
  const [selectedFlavor60, setSelectedFlavor60] = useState<string>('TANGY ORANGE');
  const [selectedFlavor30, setSelectedFlavor30] = useState<string>('TANGY ORANGE');

  const flavors = [
    { name: 'TANGY ORANGE', img: '/assets/flavor_orange.png', color: 'bg-orange-400 text-black' },
    { name: 'BLUEBERRY', img: '/assets/flavor_blueberry.png', color: 'bg-blue-400 text-black' },
    { name: 'FRUIT PUNCH', img: '/assets/flavor_fruit_punch.png', color: 'bg-red-400 text-black' },
  ];

  return (
    <section id="products" className="py-10 sm:py-24 bg-[#0a0f1d] relative border-t-4 border-black">
      
      {/* Background Halftone Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cartoon Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-16">
          <div className="inline-block bg-yellow-400 border-2 sm:border-3 border-black px-3.5 py-1 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest text-black shadow-[3px_3px_0px_#000000] transform -rotate-2">
            🔥 OFFICIAL PRE-WORKOUT RANGE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold italic tracking-wide uppercase font-heading text-white comic-stroke">
            CHOOSE YOUR <span className="text-blue-500">POWER!</span>
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: 60 SERVINGS */}
          <div className="bg-white rounded-3xl p-3.5 sm:p-8 text-black border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[12px_12px_0px_#000000] relative flex flex-col justify-between transition-all duration-300">
            
            {/* Corner Servings Badge */}
            <div className="absolute -top-3 left-2 sm:-left-3 bg-yellow-400 border-2 sm:border-3 border-black text-black font-black text-[10px] sm:text-sm px-2.5 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl shadow-[2.5px_2.5px_0px_#000000] text-center transform -rotate-2 z-20">
              <span className="block text-sm sm:text-xl font-black leading-none">60</span>
              <span className="text-[7px] sm:text-[10px] tracking-wider uppercase">SERVINGS</span>
            </div>

            {/* Content Grid: Compact 2-Col on Mobile / Standard on Desktop */}
            <div className="grid grid-cols-12 sm:grid-cols-2 gap-3 sm:gap-6 items-center pt-2 sm:pt-4">
              
              {/* Product Tub Image (Left 5 cols on mobile, full column on desktop) */}
              <div className="col-span-5 sm:col-span-1 flex flex-col items-center justify-center p-1">
                <img 
                  src="/assets/product_tub_60.png" 
                  alt="ROF PRE LEVEL 7 - 60 Servings" 
                  className="h-32 xs:h-36 sm:h-64 max-w-full object-contain filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] sm:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Product Info & Bullets (Right 7 cols on mobile, full column on desktop) */}
              <div className="col-span-7 sm:col-span-1 space-y-2 sm:space-y-4 text-left">
                <div>
                  <h3 className="text-xl sm:text-3xl font-black italic tracking-wide text-black uppercase font-heading leading-tight">
                    ROF PRE LEVEL 7
                  </h3>
                  <span className="inline-block bg-blue-500 text-white font-black text-[9px] sm:text-xs px-2 py-0.5 rounded-md sm:rounded-xl uppercase tracking-wider mt-0.5 border border-black shadow-[1.5px_1.5px_0px_#000000]">
                    60 SERVINGS PACK
                  </span>
                </div>

                <ul className="space-y-1 text-[10px] sm:text-sm font-black text-gray-900">
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Explosive Energy</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Laser Focus</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Pump & Endurance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Zero Crash</span>
                  </li>
                </ul>

                {/* Price Tag Button */}
                <div className="pt-0.5">
                  <button
                    onClick={() => onOpenOrderModal('ROF PRE LEVEL 7', '60 SERVINGS', selectedFlavor60, '₹2,499')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-base sm:text-2xl py-2 sm:py-3.5 px-3 sm:px-6 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_#000000] sm:shadow-[5px_5px_0px_#000000] transition-all flex items-center justify-center gap-2 active:translate-y-0.5 cursor-pointer min-h-[38px] sm:min-h-[48px]"
                  >
                    <span>₹2,499</span>
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Cartoon Flavors Selection (Compact Row) */}
            <div className="mt-3 pt-2.5 sm:mt-6 sm:pt-5 border-t-2 sm:border-t-3 border-black">
              <div className="text-center mb-1.5 sm:mb-3">
                <span className="bg-yellow-400 text-black text-[9px] sm:text-xs font-black px-2.5 py-0.5 rounded-md sm:rounded-xl uppercase tracking-wider font-heading border border-black shadow-[1px_1px_0px_#000000]">
                  SELECT FLAVOR
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                {flavors.map((flv) => (
                  <button
                    key={flv.name}
                    type="button"
                    onClick={() => setSelectedFlavor60(flv.name)}
                    className={`flex flex-col items-center p-1 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-black transition-all cursor-pointer ${
                      selectedFlavor60 === flv.name 
                        ? `${flv.color} shadow-[2.5px_2.5px_0px_#000000] scale-102` 
                        : 'bg-gray-100 hover:bg-gray-200 text-black shadow-[1px_1px_0px_#000000]'
                    }`}
                  >
                    <img src={flv.img} alt={flv.name} className="h-5 sm:h-9 w-auto object-contain mb-0.5" />
                    <span className="text-[8px] sm:text-[10px] font-black uppercase text-center tracking-tight leading-none">
                      {flv.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Card 2: 30 SERVINGS */}
          <div className="bg-white rounded-3xl p-3.5 sm:p-8 text-black border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[12px_12px_0px_#000000] relative flex flex-col justify-between transition-all duration-300">
            
            {/* Corner Servings Badge */}
            <div className="absolute -top-3 left-2 sm:-left-3 bg-yellow-400 border-2 sm:border-3 border-black text-black font-black text-[10px] sm:text-sm px-2.5 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl shadow-[2.5px_2.5px_0px_#000000] text-center transform -rotate-2 z-20">
              <span className="block text-sm sm:text-xl font-black leading-none">30</span>
              <span className="text-[7px] sm:text-[10px] tracking-wider uppercase">SERVINGS</span>
            </div>

            {/* Content Grid: Compact 2-Col on Mobile / Standard on Desktop */}
            <div className="grid grid-cols-12 sm:grid-cols-2 gap-3 sm:gap-6 items-center pt-2 sm:pt-4">
              
              {/* Product Tub Image (Left 5 cols on mobile, full column on desktop) */}
              <div className="col-span-5 sm:col-span-1 flex flex-col items-center justify-center p-1">
                <img 
                  src="/assets/product_tub_30.png" 
                  alt="ROF PRE LEVEL 7 - 30 Servings" 
                  className="h-32 xs:h-36 sm:h-64 max-w-full object-contain filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] sm:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Product Info & Bullets (Right 7 cols on mobile, full column on desktop) */}
              <div className="col-span-7 sm:col-span-1 space-y-2 sm:space-y-4 text-left">
                <div>
                  <h3 className="text-xl sm:text-3xl font-black italic tracking-wide text-black uppercase font-heading leading-tight">
                    ROF PRE LEVEL 7
                  </h3>
                  <span className="inline-block bg-blue-500 text-white font-black text-[9px] sm:text-xs px-2 py-0.5 rounded-md sm:rounded-xl uppercase tracking-wider mt-0.5 border border-black shadow-[1.5px_1.5px_0px_#000000]">
                    30 SERVINGS PACK
                  </span>
                </div>

                <ul className="space-y-1 text-[10px] sm:text-sm font-black text-gray-900">
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Explosive Energy</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Laser Focus</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Pump & Endurance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="p-0.5 bg-yellow-400 border border-black rounded text-black flex-shrink-0">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                    </span>
                    <span>Zero Crash</span>
                  </li>
                </ul>

                {/* Price Tag Button */}
                <div className="pt-0.5">
                  <button
                    onClick={() => onOpenOrderModal('ROF PRE LEVEL 7', '30 SERVINGS', selectedFlavor30, '₹1,499')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-base sm:text-2xl py-2 sm:py-3.5 px-3 sm:px-6 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_#000000] sm:shadow-[5px_5px_0px_#000000] transition-all flex items-center justify-center gap-2 active:translate-y-0.5 cursor-pointer min-h-[38px] sm:min-h-[48px]"
                  >
                    <span>₹1,499</span>
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Cartoon Flavors Selection (Compact Row) */}
            <div className="mt-3 pt-2.5 sm:mt-6 sm:pt-5 border-t-2 sm:border-t-3 border-black">
              <div className="text-center mb-1.5 sm:mb-3">
                <span className="bg-yellow-400 text-black text-[9px] sm:text-xs font-black px-2.5 py-0.5 rounded-md sm:rounded-xl uppercase tracking-wider font-heading border border-black shadow-[1px_1px_0px_#000000]">
                  SELECT FLAVOR
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                {flavors.map((flv) => (
                  <button
                    key={flv.name}
                    type="button"
                    onClick={() => setSelectedFlavor30(flv.name)}
                    className={`flex flex-col items-center p-1 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-black transition-all cursor-pointer ${
                      selectedFlavor30 === flv.name 
                        ? `${flv.color} shadow-[2.5px_2.5px_0px_#000000] scale-102` 
                        : 'bg-gray-100 hover:bg-gray-200 text-black shadow-[1px_1px_0px_#000000]'
                    }`}
                  >
                    <img src={flv.img} alt={flv.name} className="h-5 sm:h-9 w-auto object-contain mb-0.5" />
                    <span className="text-[8px] sm:text-[10px] font-black uppercase text-center tracking-tight leading-none">
                      {flv.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
