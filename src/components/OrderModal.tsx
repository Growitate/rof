import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Send, User, Phone, MapPin, Check, Plus, Minus, Flame, Sparkles } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSize?: string;
  initialFlavor?: string;
  initialPrice?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProduct = 'ROF PRE LEVEL 7',
  initialSize = '60 SERVINGS',
  initialFlavor = 'TANGY ORANGE',
  initialPrice = '₹2,499',
}) => {
  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [size, setSize] = useState<string>(initialSize);
  const [flavor, setFlavor] = useState<string>(initialFlavor);
  const [quantity, setQuantity] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialSize) setSize(initialSize);
    if (initialFlavor) setFlavor(initialFlavor);
    setErrorMsg('');
  }, [initialSize, initialFlavor, isOpen]);

  if (!isOpen) return null;

  const numericPrice = size === '60 SERVINGS' ? 2499 : 1499;
  const totalPrice = numericPrice * quantity;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!address.trim()) {
      setErrorMsg('Please enter your complete delivery address');
      return;
    }

    setErrorMsg('');

    // Pre-formatted WhatsApp order message
    const message = 
`🔥 *NEW ROF NUTRITION ORDER* 🔥

👤 *CUSTOMER DETAILS:*
• *Name:* ${fullName.trim()}
• *Phone:* ${phone.trim()}
• *Address:* ${address.trim()}

📦 *ORDER DETAILS:*
• *Product:* ${initialProduct}
• *Serving Size:* ${size}
• *Flavor:* ${flavor}
• *Quantity:* ${quantity}
• *Total Payable:* ₹${totalPrice.toLocaleString()}

Please confirm availability and dispatch instructions. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919582867986?text=${encoded}`, '_blank');
    onClose();
  };

  const flavorOptions = [
    { name: 'TANGY ORANGE', icon: '🍊', badgeBg: 'bg-orange-400', img: '/assets/flavor_orange.png' },
    { name: 'BLUEBERRY', icon: '🫐', badgeBg: 'bg-blue-400', img: '/assets/flavor_blueberry.png' },
    { name: 'FRUIT PUNCH', icon: '🍓', badgeBg: 'bg-red-400', img: '/assets/flavor_fruit_punch.png' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-white border-4 border-black rounded-3xl w-full max-w-lg overflow-hidden shadow-[16px_16px_0px_#000000] text-black relative my-6">
        
        {/* Cartoon Header */}
        <div className="bg-yellow-400 p-5 sm:p-6 border-b-4 border-black flex items-center justify-between relative overflow-hidden">
          {/* Subtle Halftone Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="p-2.5 rounded-2xl bg-black text-white border-2 border-black shadow-[3px_3px_0px_#000000]">
              <ShoppingBag className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="inline-block bg-black text-yellow-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-widest mb-0.5">
                FAST DIRECT CHECKOUT
              </div>
              <h3 className="font-black text-2xl italic font-heading tracking-wide uppercase text-black leading-none">
                QUICK ORDER FORM
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            className="p-2 rounded-xl bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[2px_2px_0px_#000000] transition-colors relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleWhatsAppOrder} className="p-5 sm:p-6 space-y-5 bg-[#fffdf5] max-h-[82dvh] overflow-y-auto">
          
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-100 border-3 border-black text-red-700 text-xs font-black text-center shadow-[4px_4px_0px_#000000] animate-bounce">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* STEP 1: Serving & Flavor Customization */}
          <div className="space-y-4 p-4.5 rounded-2xl bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-black uppercase tracking-wider font-heading flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-yellow-400 text-black border border-black flex items-center justify-center text-[10px]">1</span>
                <span>CHOOSE YOUR PACK & FLAVOR</span>
              </span>
            </div>

            {/* Serving Size Selection */}
            <div className="grid grid-cols-2 gap-3">
              {/* 60 Servings */}
              <button
                type="button"
                onClick={() => setSize('60 SERVINGS')}
                className={`p-3 sm:p-3.5 rounded-2xl border-3 border-black font-black text-left relative transition-all ${
                  size === '60 SERVINGS'
                    ? 'bg-yellow-300 text-black shadow-[4px_4px_0px_#000000] scale-102 ring-2 ring-black'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-[2px_2px_0px_#000000]'
                }`}
              >
                {size === '60 SERVINGS' && (
                  <div className="absolute -top-2.5 -right-2 bg-black text-yellow-400 p-0.5 rounded-full border border-black">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="block text-xs font-black text-blue-900 uppercase">🔥 BEST VALUE</span>
                <span className="block text-base font-black uppercase text-black leading-tight">60 SERVINGS</span>
                <span className="block text-xs font-extrabold text-black">₹2,499</span>
              </button>

              {/* 30 Servings */}
              <button
                type="button"
                onClick={() => setSize('30 SERVINGS')}
                className={`p-3 sm:p-3.5 rounded-2xl border-3 border-black font-black text-left relative transition-all ${
                  size === '30 SERVINGS'
                    ? 'bg-yellow-300 text-black shadow-[4px_4px_0px_#000000] scale-102 ring-2 ring-black'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-[2px_2px_0px_#000000]'
                }`}
              >
                {size === '30 SERVINGS' && (
                  <div className="absolute -top-2.5 -right-2 bg-black text-yellow-400 p-0.5 rounded-full border border-black">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="block text-xs font-black text-gray-600 uppercase">STANDARD</span>
                <span className="block text-base font-black uppercase text-black leading-tight">30 SERVINGS</span>
                <span className="block text-xs font-extrabold text-black">₹1,499</span>
              </button>
            </div>

            {/* Flavor Selection */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-800 uppercase tracking-wider block">
                SELECT FLAVOR
              </label>
              <div className="grid grid-cols-3 gap-2">
                {flavorOptions.map((flv) => (
                  <button
                    key={flv.name}
                    type="button"
                    onClick={() => setFlavor(flv.name)}
                    className={`p-2 sm:p-2.5 rounded-xl border-3 border-black transition-all flex flex-col items-center justify-center gap-1 ${
                      flavor === flv.name
                        ? `${flv.badgeBg} text-black font-black shadow-[3px_3px_0px_#000000] scale-103`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 font-extrabold shadow-[2px_2px_0px_#000000]'
                    }`}
                  >
                    <span className="text-xl">{flv.icon}</span>
                    <span className="text-[10px] tracking-tight text-center leading-tight">{flv.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-2 border-t-2 border-gray-200">
              <span className="text-xs font-black text-black uppercase tracking-wider">QUANTITY</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-xl bg-black text-white hover:bg-gray-800 font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-black w-6 text-center text-black">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-xl bg-black text-white hover:bg-gray-800 font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* STEP 2: Customer Delivery Details */}
          <div className="space-y-3.5 p-4.5 rounded-2xl bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
            <span className="text-xs font-black text-black uppercase tracking-wider font-heading flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-yellow-400 text-black border border-black flex items-center justify-center text-[10px]">2</span>
              <span>ENTER YOUR DELIVERY DETAILS</span>
            </span>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-800 uppercase tracking-wider flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>FULL NAME</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border-2 border-black focus:bg-white focus:border-blue-600 text-black text-sm font-bold outline-none shadow-[2px_2px_0px_#000000] placeholder:text-gray-400 transition-all"
              />
            </div>

            {/* Mobile / WhatsApp Number */}
            <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-800 uppercase tracking-wider flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>WHATSAPP MOBILE NUMBER</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border-2 border-black focus:bg-white focus:border-blue-600 text-black text-sm font-bold outline-none shadow-[2px_2px_0px_#000000] placeholder:text-gray-400 transition-all"
              />
            </div>

            {/* Delivery Address */}
            <div className="space-y-1">
              <label className="text-[11px] font-black text-gray-800 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>DELIVERY ADDRESS (STREET, CITY, PINCODE)</span>
              </label>
              <textarea
                rows={2}
                placeholder="House No., Building, Street Name, City, Pincode"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border-2 border-black focus:bg-white focus:border-blue-600 text-black text-sm font-bold outline-none shadow-[2px_2px_0px_#000000] placeholder:text-gray-400 resize-none transition-all"
              />
            </div>

          </div>

          {/* Price Summary & Submit CTA */}
          <div className="space-y-3 pt-1">
            <div className="bg-yellow-300 p-4 rounded-2xl flex items-center justify-between border-3 border-black shadow-[4px_4px_0px_#000000]">
              <div>
                <span className="text-[10px] font-black text-black uppercase tracking-wider block">TOTAL PAYABLE AMOUNT</span>
                <span className="text-xs font-black text-blue-900">{size} • {flavor}</span>
              </div>
              <span className="text-3xl font-black text-black italic font-heading tracking-wide">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-black py-4 px-6 rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] flex items-center justify-center gap-3 text-base tracking-wider uppercase transition-all transform active:translate-y-1"
            >
              <Send className="w-5 h-5 fill-current text-black" />
              <span>CONFIRM ORDER ON WHATSAPP!</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
