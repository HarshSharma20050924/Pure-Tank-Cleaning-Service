import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What Our Customers Say</h2>
          <p className="text-slate-600 mt-2">Real feedback from families in your city</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col h-full">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed flex-grow">"{t.text}"</p>
              <div className="mt-auto border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;