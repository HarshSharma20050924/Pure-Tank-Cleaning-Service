import React from 'react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
             <div className="font-black text-2xl text-white mb-4">
              PURE <span className="text-blue-600">TANK</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium text-slate-500">
              "Saf Tank - Swasth Pariwar"
              <br/>
              Professional water tank cleaning service in Ujjain.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Info</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-white">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Opening Hours</h5>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex justify-between border-b border-slate-900 pb-2">
                <span>Tuesday - Sunday</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-2">
                <span>Monday</span>
                <span className="text-red-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
            © 2024 Pure Tank Cleaning Service Ujjain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;