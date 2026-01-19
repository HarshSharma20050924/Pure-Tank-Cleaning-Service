import React from 'react';
import { PRICING_DATA, SUBSCRIPTION_PLANS } from '../constants';
import { AlertCircle, CheckCircle, Filter } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#2563EB] uppercase mb-2">Service Charges</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B2F5C]">Reasonable Rates (उचित दाम)</h3>
          <p className="text-slate-600 mt-4 font-medium">Extra Charge ₹200/- for Emergency / Same Day Service</p>
        </div>

        {/* Regular Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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

        {/* SUBSCRIPTION PLANS */}
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0B2F5C] flex items-center justify-center gap-2">
                    <Filter className="text-green-600"/> 
                    Membership Plans & Offers
                </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {SUBSCRIPTION_PLANS.map((plan, idx) => (
                    <div key={idx} className={`relative p-6 rounded-2xl border-2 ${plan.isPopular ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50'}`}>
                        {plan.isPopular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Recommended
                            </span>
                        )}
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{plan.title}</h4>
                        <div className="text-slate-500 font-medium text-sm mb-4">{plan.duration}</div>
                        
                        <ul className="space-y-3">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3 max-w-md">
                <AlertCircle className="text-yellow-600 shrink-0" size={24} />
                <p className="text-sm text-yellow-800 font-medium">
                    Note: Monday ko hamari service band rehti hai. Available: Tuesday - Sunday (9 AM - 6 PM).
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;