import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          <p className="text-slate-600 mt-4">Answers to things you might be wondering.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-lg">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="text-blue-600" size={24} />
                ) : (
                  <ChevronDown className="text-slate-400" size={24} />
                )}
              </button>
              {openIndex === idx && (
                <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;