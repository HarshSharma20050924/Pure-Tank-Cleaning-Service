import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'सेवाएं (Services)', href: '#services' },
    { name: 'प्रक्रिया (Process)', href: '#process' },
    { name: 'रेट लिस्ट (Rates)', href: '#pricing' },
    { name: 'संपर्क (Contact)', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#D6EAF8] shadow-md py-3' : 'bg-[#D6EAF8] md:bg-transparent py-3 md:py-4 shadow-sm md:shadow-none'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#0B2F5C] shadow-sm shrink-0">
             <img src="/photos/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col">
            <div className={`font-black text-xl md:text-2xl tracking-tight leading-none text-[#0B2F5C]`}>
              PURE <span className="text-[#2563EB]">TANK</span>
            </div>
            <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-slate-600`}>
              Cleaning Service
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-wide hover:text-[#2563EB] transition-colors text-[#0B2F5C]`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => console.log('WhatsApp Button Clicked (Navbar Desktop)')}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg"
          >
            <Phone size={18} fill="currentColor" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#0B2F5C] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-blue-100 shadow-2xl py-4 px-6 flex flex-col space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#0B2F5C] font-bold text-lg border-b border-gray-100 py-4 flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <span className="text-gray-300 text-2xl">›</span>
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a 
                href={WHATSAPP_LINK}
                onClick={() => console.log('WhatsApp Button Clicked (Navbar Mobile)')}
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-5 py-4 rounded-xl font-bold text-lg shadow-lg"
            >
                <Phone size={20} fill="currentColor" />
                WhatsApp Booking
            </a>
            <a 
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center justify-center gap-3 bg-[#0B2F5C] text-white px-5 py-4 rounded-xl font-bold text-lg shadow-lg"
            >
                <Phone size={20} />
                Call: {COMPANY_PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;