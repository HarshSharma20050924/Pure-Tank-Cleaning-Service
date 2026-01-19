import React, { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_ADDRESS, INSTAGRAM_LINK } from '../constants';

const Contact: React.FC = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Plastic Tank',
    capacity: '500 - 1000 Liters', // Default value
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `Hello Pure Tank,\n\nI want to book a cleaning service.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Type:* ${formData.type}\n*Capacity:* ${formData.capacity}\n*Address:* ${formData.address}\n\nPlease confirm availability.`;
    
    // Encode URL and open WhatsApp
    const whatsappUrl = `https://wa.me/918109958822?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-200 uppercase mb-3">संपर्क करें (Contact)</h2>
            <h3 className="text-4xl font-black mb-8">PURE TANK Cleaning</h3>
            <p className="text-blue-100 mb-12 text-lg font-medium">
              आज ही कॉल करें और अपनी पानी की टंकी साफ करवाएं।
            </p>

            <div className="space-y-8 bg-blue-700/50 p-8 rounded-2xl border border-blue-500">
              <div className="flex items-start gap-5">
                <Phone className="text-yellow-400 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Booking</h4>
                  <a href={`tel:${COMPANY_PHONE}`} className="text-2xl font-black text-white hover:text-yellow-400 transition-colors">{COMPANY_PHONE}</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                 <Instagram className="text-yellow-400 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Instagram</h4>
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-blue-100 font-medium hover:text-white underline">@pure_tank810</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MapPin className="text-yellow-400 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Address</h4>
                  <p className="text-blue-100 font-medium leading-relaxed">
                    {COMPANY_ADDRESS}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2">
              <MessageCircle className="text-green-500" />
              Book Service Now
            </h4>
            <p className="text-sm text-slate-500 mb-6">
              Fill this form to send details directly to our WhatsApp.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-bold text-slate-600 mb-1 block">आपका नाम (Name)</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium" 
                  placeholder="अपना नाम लिखें" 
                />
              </div>
              
              <div>
                <label className="text-sm font-bold text-slate-600 mb-1 block">मोबाइल नंबर (Mobile)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium" 
                  placeholder="अपना नंबर लिखें" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-slate-600 mb-1 block">टैंक का प्रकार (Type)</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm"
                  >
                    <option>Plastic Tank</option>
                    <option>Cemented Tank</option>
                    <option>Underground Tank</option>
                    <option>Others</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-600 mb-1 block">साइज (Capacity)</label>
                  <select 
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm"
                  >
                    <option>500 - 1000 Liters</option>
                    <option>1500 - 2000 Liters</option>
                    <option>3000 - 5000 Liters</option>
                    <option>5000+ Liters</option>
                    <option>Don't Know (पता नहीं)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-600 mb-1 block">पता (Address / Area)</label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 font-medium h-24" 
                  placeholder="उज्जैन में कहाँ? (पूरी जानकारी दें)"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg uppercase tracking-wide flex items-center justify-center gap-2">
                <MessageCircle size={24} />
                Send on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;