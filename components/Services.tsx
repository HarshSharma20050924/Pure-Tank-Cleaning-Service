import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do</h3>
          <p className="text-slate-600 text-lg">
            We provide complete cleaning solutions for all types of water tanks in your home, office, or society.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md bg-slate-50 hover:bg-white text-center md:text-left">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
                Book Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;