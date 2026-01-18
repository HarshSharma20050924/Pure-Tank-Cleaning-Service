import React from 'react';
import { PRICING_DATA } from '../constants';
import { AlertCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#2563EB] uppercase mb-2">Service Charges</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B2F5C]">Reasonable Rates (उचित दाम)</h3>
          <p className="text-slate-600 mt-4 font-medium">Extra Charge ₹200/- for Emergency / Same Day Service</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_DATA.map((tier) => (
            <div key={tier.category} className="bg-[#F0F9FF] rounded-2xl border-2 border-[#D6EAF8] overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0B2F5C] px-6 py-4 border-b border-blue-200">
                <h4 className="text-xl font-bold text-white text-center uppercase tracking-wide">
                  {tier.category}
                </h4>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-blue-100">
                    {tier.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-4">
                          <div className="font-bold text-[#0B2F5C] text-base">{item.capacity}</div>
                        </td>
                        <td className="py-4 text-right">
                          <div className="font-black text-[#2563EB] text-xl">{item.price}/-</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Underground Tank Card */}
          <div className="lg:col-span-2 bg-[#2563EB] rounded-2xl p-8 text-white text-center shadow-lg shadow-blue-300">
            <h4 className="text-2xl font-bold mb-2 uppercase">Underground Water Tank</h4>
            <div className="text-4xl font-black mb-2">₹1500/- <span className="text-xl font-medium">se start</span></div>
            <p className="text-blue-100 text-sm font-medium opacity-90">
              (Depend on tank size & condition)
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3 max-w-md">
                <AlertCircle className="text-yellow-600 shrink-0" size={24} />
                <p className="text-sm text-yellow-800 font-medium">
                    Note: Monday ko hamari service band rehti hai. Available: Tuesday - Sunday.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;