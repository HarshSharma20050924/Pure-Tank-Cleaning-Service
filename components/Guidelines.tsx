import React from 'react';
import { Shield, UserCheck, AlertTriangle, FileCheck, Info, QrCode } from 'lucide-react';
import { SAFETY_GEAR } from '../constants';

const Guidelines: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B2F5C]">Guidelines & Policies (नियम और शर्तें)</h2>
            <p className="text-slate-600 mt-2">Safe and transparent service for your peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            
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
                    <li className="flex gap-3">
                        <QrCode size={18} className="text-purple-500 shrink-0 mt-0.5" />
                        <span>ऑनलाइन पेमेंट के लिए <strong>QR Code / Barcode</strong> उपलब्ध है।</span>
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
                    <h3 className="text-xl font-bold text-slate-800">Site Conditions <span className="text-sm font-normal text-slate-500 block md:inline md:ml-2">(साइट की शर्तें)</span></h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2 items-start">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>काम पूरा होने पर <strong>Completion Confirmation</strong> देना अनिवार्य है।</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>ऊंचाई पर काम करने की अनुमति (Height Permission) देना अनिवार्य है।</span>
                    </li>
                    <li className="flex gap-2 items-start">
                         <span className="text-orange-500 mt-1">•</span>
                        <span>सीमेंट टैंक में <strong>लीकेज (Leakage)</strong> की जिम्मेदारी हमारी नहीं होगी।</span>
                    </li>
                    <li className="flex gap-2 items-start">
                         <span className="text-orange-500 mt-1">•</span>
                        <span>यदि टैंक ऊंचाई पर है, तो <strong>सीढ़ी (Ladder), बाल्टी और पानी</strong> ग्राहक को उपलब्ध कराना होगा।</span>
                    </li>
                    <li className="flex gap-2 items-start">
                         <span className="text-orange-500 mt-1">•</span>
                        <span>सफाई केवल <strong>Visual Inspection</strong> (देखने) के आधार पर पूर्ण मानी जाएगी।</span>
                    </li>
                </ul>
            </div>

        </div>

        <div className="mt-8 text-center text-xs text-slate-500 bg-slate-100 py-3 rounded-lg border border-slate-200">
            <strong>Note:</strong> Also Available (On Order): Thermal Protection Kit & Water Softener Kit.
        </div>
      </div>
    </section>
  );
};

export default Guidelines;