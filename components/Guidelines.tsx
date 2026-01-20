import React, { useState } from 'react';
import { Shield, UserCheck, AlertTriangle, FileCheck, Info, QrCode, ShoppingBag, ThermometerSun, Droplets, Zap, ArrowRight, X } from 'lucide-react';
import { SAFETY_GEAR, COMPANY_PHONE } from '../constants';

const Guidelines: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  
  const handleBuyProduct = (productName: string) => {
    const message = `Hello Pure Tank, I want to buy *${productName}*. Please share details and price.`;
    window.open(`https://wa.me/91${COMPANY_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B2F5C]">Guidelines & Policies (नियम और शर्तें)</h2>
            <p className="text-slate-600 mt-2">Safe and transparent service for your peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* SAFETY SECTION */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4 border-b pb-4">
                    <Shield className="text-green-600" size={28} />
                    <h3 className="text-xl font-bold text-slate-800">Safety & Precautions <span className="text-sm font-normal text-slate-500 block md:inline md:ml-2">(सुरक्षा और सावधानियां)</span></h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm font-medium">
                    हम अपनी सुरक्षा के साथ-साथ टैंक की स्वच्छता (Sanitation) का भी पूरा ध्यान रखते हैं।
                </p>
                <div className="grid grid-cols-2 gap-3">
                    {SAFETY_GEAR.map((item, idx) => (
                        <div key={idx} className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* VERIFICATION SECTION */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4 border-b pb-4">
                    <UserCheck className="text-blue-600" size={28} />
                    <h3 className="text-xl font-bold text-slate-800">Verification Rules <span className="text-sm font-normal text-slate-500 block md:inline md:ml-2">(सत्यापन नियम)</span></h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3">
                        <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>स्टाफ को प्रवेश देने से पहले रजिस्टर्ड नंबर पर कॉल करके <strong>वेरीफाई (Verify)</strong> करें।</span>
                    </li>
                    <li className="flex gap-3">
                        <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>सफाई कर्मचारी का <strong>फोटो पहचान पत्र (Photo ID)</strong> अवश्य चेक करें।</span>
                    </li>
                    <li className="flex gap-3 bg-red-50 p-2 rounded-lg border border-red-100">
                        <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <span>
                            <span className="font-bold text-red-600">चेतावनी:</span> सफाई कर्मियों को किसी भी प्रकार का नशीला पदार्थ या खाने की वस्तु न दें।
                        </span>
                    </li>
                </ul>
            </div>

            {/* PAYMENT & CERTS */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <div className="flex items-center gap-3 mb-4 border-b pb-4">
                    <FileCheck className="text-purple-600" size={28} />
                    <h3 className="text-xl font-bold text-slate-800">Payment & Certs <span className="text-sm font-normal text-slate-500 block md:inline md:ml-2">(भुगतान और प्रमाण पत्र)</span></h3>
                </div>
                 <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3 items-start">
                        <QrCode size={18} className="text-purple-500 shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-2 w-full">
                            <span>ऑनलाइन पेमेंट के लिए <strong>QR Code</strong> उपलब्ध है।</span>
                            <button 
                                onClick={() => setShowQR(true)}
                                className="flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-lg font-bold text-xs hover:bg-purple-700 transition-colors w-full sm:w-auto"
                            >
                                <QrCode size={14} /> View Payment QR Code
                            </button>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <FileCheck size={18} className="text-purple-500 shrink-0 mt-0.5" />
                        <span>काम पूरा होने पर <strong>Cleaning Certificate</strong> प्रदान किया जाएगा।</span>
                    </li>
                    <li className="flex gap-3">
                        <AlertTriangle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                        <span>
                            <strong>घोषणा:</strong> हमारी कोई अन्य शाखा (Branch) नहीं है। बुकिंग केवल रजिस्टर्ड नंबर से ही मान्य है।
                        </span>
                    </li>
                </ul>
            </div>

            {/* SITE CONDITIONS */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <div className="flex items-center gap-3 mb-4 border-b pb-4">
                    <AlertTriangle className="text-orange-600" size={28} />
                    <h3 className="text-xl font-bold text-slate-800">Customer Responsibilities <span className="text-sm font-normal text-slate-500 block md:inline md:ml-2">(ग्राहक की जिम्मेदारियां)</span></h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3 items-start bg-orange-50 p-2 rounded-md">
                        <span className="text-orange-600 font-bold shrink-0">1.</span>
                        <span><strong>सीढ़ी (Ladder):</strong> यदि टैंक ऊंचाई पर है, तो सुरक्षित सीढ़ी ग्राहक को उपलब्ध करानी होगी।</span>
                    </li>
                    <li className="flex gap-3 items-start bg-orange-50 p-2 rounded-md">
                        <span className="text-orange-600 font-bold shrink-0">2.</span>
                        <span><strong>पानी और बाल्टी (Bucket):</strong> सफाई के लिए आवश्यक पानी और बाल्टी की व्यवस्था ग्राहक को करनी होगी।</span>
                    </li>
                     <li className="flex gap-3 items-start bg-orange-50 p-2 rounded-md">
                        <span className="text-orange-600 font-bold shrink-0">3.</span>
                        <span><strong>बिजली (Electricity):</strong> मशीन चलाने के लिए बिजली का प्वाइंट ग्राहक को देना होगा।</span>
                    </li>
                    <li className="flex gap-3 items-start">
                         <span className="text-orange-400 font-bold shrink-0">•</span>
                        <span>सीमेंट टैंक में <strong>लीकेज (Leakage)</strong> की जिम्मेदारी हमारी नहीं होगी।</span>
                    </li>
                    <li className="flex gap-3 items-start">
                         <span className="text-orange-400 font-bold shrink-0">•</span>
                        <span>सफाई केवल <strong>Visual Inspection</strong> (देखने) के आधार पर पूर्ण मानी जाएगी।</span>
                    </li>
                </ul>
            </div>

        </div>

        {/* FEATURED PRODUCTS SECTION */}
        <div className="bg-[#0B2F5C] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="text-center mb-10 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    <ShoppingBag className="text-yellow-400" />
                    Essential Add-ons (जरूरी सामान)
                </h3>
                <p className="text-blue-200">Available on order. Get delivery with your cleaning service.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
                {/* Product 1 */}
                <div onClick={() => handleBuyProduct('Thermal Protection Jacket')} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer group flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                    <div className="bg-orange-100 p-4 rounded-full group-hover:scale-110 transition-transform">
                        <ThermometerSun size={32} className="text-orange-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Thermal Protection Jacket</h4>
                        <p className="text-slate-500 text-sm mb-4">Keeps water cool in summer & warm in winter. Protects tank from cracks.</p>
                        <span className="inline-flex items-center text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            Buy on WhatsApp <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </div>

                {/* Product 2 */}
                <div onClick={() => handleBuyProduct('Water Softener Kit')} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer group flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                    <div className="bg-cyan-100 p-4 rounded-full group-hover:scale-110 transition-transform">
                        <Droplets size={32} className="text-cyan-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Water Softener Kit</h4>
                        <p className="text-slate-500 text-sm mb-4">Reduces water hardness. Prevents hair fall & skin issues. Protects pipes.</p>
                        <span className="inline-flex items-center text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            Buy on WhatsApp <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in" onClick={() => setShowQR(false)}>
            <div className="bg-white p-6 rounded-2xl max-w-sm w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={() => setShowQR(false)} className="absolute top-3 right-3 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <X size={20} className="text-slate-600" />
                </button>
                <div className="text-center">
                    <h3 className="text-xl font-black text-[#0B2F5C] mb-1">Scan to Pay</h3>
                    <p className="text-slate-500 text-sm mb-4 font-medium">Accepts UPI & All Payment Apps</p>
                    <div className="bg-slate-50 p-3 rounded-xl border-2 border-slate-200 inline-block mb-4">
                        <img 
                            src="/payment-qr.png" 
                            alt="Payment QR Code" 
                            className="w-full max-w-[240px] h-auto rounded-lg mix-blend-multiply"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/300x400/png?text=Please+Save+Image+As%0Apublic/payment-qr.png";
                            }}
                        />
                    </div>
                    <div className="flex justify-center gap-3 text-slate-400 grayscale opacity-70">
                        {/* Simple representations of payment apps */}
                        <span className="font-bold text-xs">GPay</span>
                        <span className="font-bold text-xs border-l border-slate-300 pl-3">PhonePe</span>
                        <span className="font-bold text-xs border-l border-slate-300 pl-3">Paytm</span>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Guidelines;