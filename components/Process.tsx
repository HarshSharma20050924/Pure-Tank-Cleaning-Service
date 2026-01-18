import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">5-स्टेप सफाई प्रक्रिया</h3>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
            हमारी सफाई की प्रक्रिया (Process) एकदम हाइजीनिक और सुरक्षित है।
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-center gap-6 mb-8 relative">
              {/* Step Number Circle */}
              <div className="shrink-0 relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-300 border-4 border-white">
                  <span className="text-2xl font-black text-white">{step.id}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-grow w-full bg-slate-50 p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all flex items-center gap-6">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                  <p className="text-slate-600 mt-1 font-medium">{step.description}</p>
                </div>
              </div>

              {/* Connecting Line (except last item) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-32px] w-1 bg-slate-200 hidden md:block -z-0"></div>
              )}
               {index < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden text-slate-300 py-2">
                  <ArrowDown size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;