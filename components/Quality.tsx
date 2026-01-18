import React from 'react';
import { QUALITY_POINTS } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <section className="py-20 bg-blue-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-1.5 mb-6 border border-blue-600">
              <ShieldCheck size={16} className="text-blue-200" />
              <span className="text-blue-50 text-xs font-bold tracking-wide uppercase">Safety Guarantee</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We Clean It Like <br/>It's Our Own Home
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Clean water is important for your family's health. Dirty tanks can cause diseases. We make sure your tank is germ-free and sludge-free. Our staff is trained to work safely and cleanly.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {QUALITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-blue-700 p-2 rounded-full shrink-0">
                    <point.icon size={18} className="text-blue-200" />
                  </div>
                  <span className="font-medium text-white">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Clean water glass" 
              className="relative rounded-xl shadow-xl w-full h-auto object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;