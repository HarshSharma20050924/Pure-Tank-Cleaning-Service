import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, User, Phone, Lock, KeyRound, QrCode, ArrowLeft } from 'lucide-react';

interface StaffPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StaffPortal: React.FC<StaffPortalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [showQR, setShowQR] = useState(false);

  // Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tankType, setTankType] = useState('Plastic Tank');
  const [tankCapacity, setTankCapacity] = useState('500 - 1000 Liters');

  // Reset state when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError('');
      setIsAuthenticated(false);
      setShowQR(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded PIN: Last 4 digits of company phone '8822'
    if (pin === '8822') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect PIN');
      setPin('');
    }
  };

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date().toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });

    const time = new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit', minute: '2-digit'
    });

    // Professional Clearance Message
    const message = `✅ *SERVICE COMPLETED*
    
Hello ${customerName || 'Sir/Ma\'am'},

Your Water Tank Cleaning is successfully completed.

📋 *Job Details:*
• Date: ${today} at ${time}
• Tank Type: ${tankType}
• Capacity: ${tankCapacity}
• Status: *Clean & Sanitized* ✨
• Technician: Pure Tank Team

Thank you for choosing *Pure Tank Cleaning Ujjain*! 💧
For feedback or support, save this number.`;

    // Send to Customer's Phone
    let phone = customerPhone.replace(/\D/g, '');
    if (phone.length === 10) phone = '91' + phone;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0B2F5C] p-6 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {showQR ? <QrCode size={24} className="text-blue-400"/> : (isAuthenticated ? <User size={24} className="text-blue-400" /> : <Lock size={24} className="text-blue-400" />)}
              {showQR ? 'Payment QR' : (isAuthenticated ? 'Staff Dashboard' : 'Staff Login')}
            </h2>
            <p className="text-blue-200 text-xs mt-1">
              {showQR ? 'Show this to customer' : (isAuthenticated ? 'Send Work Completion Report' : 'Restricted Area')}
            </p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-grow overflow-y-auto">
            {!isAuthenticated ? (
            /* LOGIN VIEW */
            <form onSubmit={handleLogin} className="p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <KeyRound size={32} />
                </div>
                <p className="text-slate-600 text-sm">Enter staff PIN to access tools.</p>
                </div>

                <div className="mb-6">
                <input 
                    type="password" 
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    maxLength={4}
                    autoFocus
                    className="w-full text-center text-3xl tracking-[0.5em] font-bold py-4 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none bg-transparent"
                    placeholder="••••"
                />
                {error && <p className="text-red-500 text-xs text-center mt-2 font-bold">{error}</p>}
                </div>

                <button 
                type="submit"
                className="w-full bg-[#0B2F5C] hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition-all"
                >
                Unlock Portal
                </button>
            </form>
            ) : showQR ? (
                /* QR CODE VIEW */
                <div className="p-6 h-full flex flex-col items-center justify-center animate-in slide-in-from-right duration-300">
                    <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 mb-6 shadow-inner">
                        <img 
                            src="/payment-qr.png" 
                            alt="Payment QR" 
                            className="w-full max-w-[280px] h-auto rounded-lg mix-blend-multiply"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/300x400/png?text=Save+Image+As%0Apublic/payment-qr.png";
                            }}
                        />
                    </div>
                    <p className="text-center text-slate-600 font-bold mb-6">Scan to Pay via UPI</p>
                    
                    <button 
                        onClick={() => setShowQR(false)}
                        className="flex items-center gap-2 text-slate-500 hover:text-[#0B2F5C] font-bold transition-colors"
                    >
                        <ArrowLeft size={20} /> Back to Dashboard
                    </button>
                </div>
            ) : (
            /* DASHBOARD VIEW */
            <form onSubmit={handleSendReport} className="p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                
                <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Customer Name</label>
                <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter customer name"
                    />
                </div>
                </div>

                <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Customer WhatsApp Number</label>
                <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                    type="tel" 
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="e.g. 98260XXXXX"
                    />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Tank Type</label>
                    <select 
                    value={tankType}
                    onChange={(e) => setTankType(e.target.value)}
                    className="w-full px-2 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    >
                    <option>Plastic Tank</option>
                    <option>Cemented Tank</option>
                    <option>Underground Sump</option>
                    <option>Full House Cleaning</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Capacity</label>
                    <select 
                    value={tankCapacity}
                    onChange={(e) => setTankCapacity(e.target.value)}
                    className="w-full px-2 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    >
                    <option>500 - 1000 Liters</option>
                    <option>1500 - 2000 Liters</option>
                    <option>3000 - 5000 Liters</option>
                    <option>5000+ Liters</option>
                    </select>
                </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-2">
                <h4 className="text-green-800 font-bold text-sm mb-1 flex items-center gap-1">
                    <CheckCircle size={14} /> Message Preview:
                </h4>
                <p className="text-xs text-green-700 italic">
                    "Your Water Tank Cleaning is successfully completed. Status: Clean & Sanitized..."
                </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                    <button 
                        type="button" 
                        onClick={() => setShowQR(true)}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm"
                    >
                        <QrCode size={18} />
                        Show QR
                    </button>
                    <button 
                        type="submit" 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm"
                    >
                        <Send size={18} />
                        Send Report
                    </button>
                </div>
                
                <div className="text-center pt-2">
                    <button type="button" onClick={() => setIsAuthenticated(false)} className="text-xs text-slate-400 hover:text-red-500 underline">
                        Logout
                    </button>
                </div>

            </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;