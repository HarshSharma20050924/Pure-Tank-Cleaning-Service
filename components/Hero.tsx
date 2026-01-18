import React from 'react';
import { Phone, MessageCircle, Building2, Factory, Home, Briefcase } from 'lucide-react';
import { WHATSAPP_LINK, COMPANY_PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-[#D6EAF8] overflow-hidden pt-28 pb-12 md:py-0">
      
      {/* 
         BACKGROUND DECORATION
         Desktop: Curved dark blue shape on right.
         Mobile: Hidden or simplified to ensure text readability.
      */}
      <div className="hidden md:block absolute top-0 right-0 w-[50%] h-full bg-[#1e40af] rounded-l-[100%_50%] z-0 shadow-2xl origin-center transform scale-y-110"></div>
      
      {/* Mobile-only bottom curve decoration */}
      <div className="md:hidden absolute bottom-0 left-0 w-full h-32 bg-[#1e40af] rounded-t-[50%] z-0"></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT (Text) */}
          <div className="order-1 text-center md:text-left">
            
            {/* LOGO IN HERO */}
            <div className="mb-6 inline-block">
                <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full flex items-center justify-center border-4 border-[#1e40af] shadow-lg overflow-hidden relative mx-auto md:mx-0">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0B2F5C] leading-[0.9] mb-3 drop-shadow-sm font-sans uppercase tracking-tighter">
              PURE TANK
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-[#2563EB] mb-6 font-sans">
              Cleaning Service
            </h2>
            
            <div className="bg-white/60 md:bg-transparent p-4 rounded-xl backdrop-blur-sm md:p-0 md:backdrop-blur-none border border-white/50 md:border-none mb-8">
                <p className="text-xl md:text-xl text-slate-800 leading-relaxed font-bold border-l-4 border-[#2563EB] pl-4 text-left">
                "साफ टैंक - स्वस्थ परिवार" <br/>
                <span className="font-medium text-base text-slate-700">उज्जैन की सबसे भरोसेमंद टैंक क्लीनिंग सर्विस।</span>
                </p>
            </div>

            {/* BULLET POINTS */}
            <div className="space-y-3 mb-8 text-left inline-block w-full md:w-auto bg-blue-50/50 md:bg-transparent p-4 md:p-0 rounded-lg">
                <div className="flex items-center gap-3">
                    <Factory className="text-[#0B2F5C]" size={22} />
                    <span className="text-[#0B2F5C] font-bold text-base md:text-lg">Industrial Water Tank</span>
                </div>
                <div className="flex items-center gap-3">
                    <Briefcase className="text-[#0B2F5C]" size={22} />
                    <span className="text-[#0B2F5C] font-bold text-base md:text-lg">Office Water Tank</span>
                </div>
                <div className="flex items-center gap-3">
                    <Building2 className="text-[#0B2F5C]" size={22} />
                    <span className="text-[#0B2F5C] font-bold text-base md:text-lg">Commercial Water Tank</span>
                </div>
                <div className="flex items-center gap-3">
                    <Home className="text-[#0B2F5C]" size={22} />
                    <span className="text-[#0B2F5C] font-bold text-base md:text-lg">House Water Tank</span>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => console.log('WhatsApp Button Clicked (Hero)')}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white w-full md:w-auto px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-green-600/20 active:scale-95"
              >
                <MessageCircle size={24} fill="currentColor" />
                WhatsApp Now
              </a>
              <a 
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center justify-center gap-2 bg-[#0B2F5C] text-white w-full md:w-auto px-8 py-4 rounded-full font-bold text-xl transition-all hover:bg-blue-900 shadow-xl shadow-blue-900/20 active:scale-95"
              >
                <Phone size={20} />
                {COMPANY_PHONE}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT (Image) */}
          <div className="order-2 md:order-2 flex justify-center items-center relative mt-8 md:mt-0">
             
             {/* IMAGE PLACEHOLDER */}
           <div className="relative w-72 md:w-[26rem] aspect-square z-10 bg-white rounded-full p-6 border-4 border-white shadow-2xl flex items-center justify-center">

              <img
                src="/water.png"
                alt="Water Tank Cleaning"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;