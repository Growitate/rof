import React from 'react';
import { ShoppingCart, Sparkles } from 'lucide-react';

interface FlavorsSectionProps {
  onOpenOrderModal: (product?: string, size?: string, flavor?: string) => void;
}

export const FlavorsSection: React.FC<FlavorsSectionProps> = ({ onOpenOrderModal }) => {
  const flavorCards = [
    {
      id: 'orange',
      name: 'TANGY ORANGE',
      tagline: 'Citrus Surge & Zesty Rush!',
      desc: 'A crisp, explosive burst of sun-ripened oranges. Formulated to ignite your tastebuds before hitting heavy sets!',
      img: '/assets/flavor_art_orange.jpg',
      badge: 'BOOM! CITRUS RUSH',
      cardBg: 'bg-[#fff5e6]',
      headerBg: 'bg-[#ff7700]',
      borderColor: 'border-black',
      tilt: 'md:-rotate-1',
      btnColor: 'bg-[#ff6600] hover:bg-[#e65c00] text-white shadow-[#ff6600]/40',
      stickerText: '🍊 100% REAL ZEST',
      notes: ['Sun-Ripened Zest', 'Zero Aftertaste', 'Instant Energy']
    },
    {
      id: 'blueberry',
      name: 'BLUEBERRY BLAST',
      tagline: 'Wild Berry Explosion!',
      desc: 'Intense wild blueberry punch packed with rich sweet berry notes and a smooth crisp finish. Pure berry power!',
      img: '/assets/flavor_art_blueberry.jpg',
      badge: 'ZAP! BERRY POWER',
      cardBg: 'bg-[#eef5ff]',
      headerBg: 'bg-[#0066ff]',
      borderColor: 'border-black',
      tilt: 'md:rotate-1',
      btnColor: 'bg-[#0055ff] hover:bg-[#0044cc] text-white shadow-[#0055ff]/40',
      stickerText: '🫐 BERRY PUNCH',
      notes: ['Wild Berry Sweetness', 'Rich Flavor', 'Smooth Hydration']
    },
    {
      id: 'fruitpunch',
      name: 'FRUIT PUNCH',
      tagline: 'Tropical Fruit Mania!',
      desc: 'A high-octane blend of strawberries, pineapples, cherries, and apples for ultimate taste sensation!',
      img: '/assets/flavor_art_fruit_punch.jpg',
      badge: 'POW! TROPICAL RUSH',
      cardBg: 'bg-[#ffeef2]',
      headerBg: 'bg-[#ff0044]',
      borderColor: 'border-black',
      tilt: 'md:-rotate-1',
      btnColor: 'bg-[#ff0033] hover:bg-[#cc0029] text-white shadow-[#ff0033]/40',
      stickerText: '🍓 TROPICAL BLAST',
      notes: ['Triple Fruit Hit', 'Bold Tropical Blast', 'Max Crave']
    }
  ];

  return (
    <section id="flavors" className="py-12 sm:py-20 bg-white text-gray-900 relative overflow-hidden border-t-4 border-black">
      
      {/* Comic Halftone Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cartoon Header */}
        <div className="text-center space-y-2.5 mb-10 sm:mb-16">
          <div className="inline-block bg-yellow-400 border-2 sm:border-3 border-black px-3.5 py-1 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest text-black shadow-[3px_3px_0px_#000000] transform -rotate-2">
            ⚡ CRAVE THE POWER
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold italic tracking-wide uppercase font-heading text-black comic-stroke">
            3 EXPLOSIVE <span className="text-blue-600">FLAVORS!</span>
          </h2>
          <p className="text-gray-800 text-xs sm:text-lg font-bold max-w-2xl mx-auto">
            Zero chalkiness! No bitter aftertaste! Just 3 mouth-watering, high-impact flavors ready to power your workout.
          </p>
        </div>

        {/* 3 Cartoon Cards Side-by-Side (Razor Sharp Crisp Pristine Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {flavorCards.map((flv) => (
            <div 
              key={flv.id}
              className={`${flv.cardBg} ${flv.tilt} rounded-3xl p-4.5 sm:p-8 border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[10px_10px_0px_#000000] flex flex-col justify-between group transition-all duration-300 hover:scale-102 hover:shadow-[12px_12px_0px_#000000] relative`}
            >
              
              {/* Comic Sticker Top Right */}
              <div className="absolute -top-3.5 -right-1.5 bg-yellow-300 border-2 border-black px-2.5 py-0.5 rounded-lg font-black text-[9px] sm:text-[11px] uppercase tracking-wider text-black shadow-[2px_2px_0px_#000000] z-20 transform rotate-6">
                {flv.stickerText}
              </div>

              {/* Top Badge & Header */}
              <div className="space-y-2">
                <div className="inline-block">
                  <span className={`${flv.headerBg} text-white border border-black px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000000]`}>
                    {flv.badge}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-2xl sm:text-4xl font-black italic tracking-wide text-black uppercase font-heading">
                    {flv.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm font-black text-gray-800 italic">
                    "{flv.tagline}"
                  </p>
                </div>
              </div>

              {/* Center Image Box (Pristine Razor Sharp High-Res Display) */}
              <div className="my-3 sm:my-5 relative w-full max-w-[260px] sm:max-w-[280px] aspect-square mx-auto rounded-2xl overflow-hidden bg-black border-3 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center p-1">
                <img 
                  src={flv.img} 
                  alt={flv.name} 
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Description & Tasting Notes */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-gray-900 font-extrabold leading-relaxed">
                  {flv.desc}
                </p>

                {/* Comic Notes Pills */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {flv.notes.map((note, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded-md bg-white text-[9px] sm:text-[10px] font-black text-black border border-black shadow-[1.5px_1.5px_0px_#000000]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Cartoon Action Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenOrderModal('ROF PRE LEVEL 7', '60 SERVINGS', flv.name)}
                    className={`w-full py-3 sm:py-4 px-4 rounded-xl sm:rounded-2xl ${flv.btnColor} border-2 sm:border-3 border-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] sm:shadow-[5px_5px_0px_#000000] flex items-center justify-center gap-2 transition-all transform active:translate-y-0.5 cursor-pointer min-h-[44px]`}
                  >
                    <span>ORDER {flv.name}</span>
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
