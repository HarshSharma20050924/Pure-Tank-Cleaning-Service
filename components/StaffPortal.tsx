import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, User, Phone, Lock, KeyRound, QrCode, ArrowLeft, Calendar, FileText, Plus, Trash2 as Trash, Download } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface StaffPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StaffPortal: React.FC<StaffPortalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [activeTab, setActiveTab] = useState<'report' | 'confirm' | 'bill'>('report');

  // Form State - Common
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Form State - Report
  const [tankType, setTankType] = useState('Plastic Tank');
  const [tankCapacity, setTankCapacity] = useState('500 - 1000 Liters');

  // Form State - Confirmation
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Form State - Bill
  const [selectedServices, setSelectedServices] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [billTankType, setBillTankType] = useState('Plastic Tank');
  const [customServiceName, setCustomServiceName] = useState('');
  const [customServicePrice, setCustomServicePrice] = useState('');

  // Reset state when modal closes or opens
  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError('');
      setIsAuthenticated(false);
      setShowQR(false);
      setActiveTab('report');
      setCustomerName('');
      setCustomerPhone('');
      setSelectedServices([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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

    let phone = customerPhone.replace(/\D/g, '');
    if (phone.length === 10) phone = '91' + phone;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSendConfirmation = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `✨ *CONFIRMATION MESSAGE*

Hello ${customerName || 'Sir/Ma\'am'},

Namaste! This is from *Pure Tank Cleaning Service Ujjain*. 💧

Your tank cleaning appointment has been confirmed!

📅 *Scheduled Details:*
• Date: ${appointmentDate}
• Time: ${appointmentTime}

Our team will reach your location as per the scheduled time. Thank you for choosing us!

"Saf Tank - Swasth Pariwar" 🏠✨`;

    let phone = customerPhone.replace(/\D/g, '');
    if (phone.length === 10) phone = '91' + phone;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGenerateBill = async (e: React.FormEvent) => {
    e.preventDefault();

    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('en-IN');
    const invoiceNum = `INV-${Math.floor(1000 + Math.random() * 9000)}`;

    // Helper to load image
    const loadImage = (url: string): Promise<string> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => resolve('');
        img.src = url;
      });
    };

    // Load images
    const [logoData, waterData] = await Promise.all([
      loadImage('/logo.png'),
      loadImage('/photos/water.png')
    ]);

    // Theme Colors
    const primaryColor = [11, 47, 92]; // #0B2F5C

    // Header Background
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 45, 'F');

    // Add Water Logo Background (Subtle)
    if (waterData) {
      const anyDoc = doc as any;
      anyDoc.saveGraphicsState();
      anyDoc.setGState(new anyDoc.GState({ opacity: 0.1 }));
      doc.addImage(waterData, 'PNG', 130, 50, 70, 70);
      anyDoc.restoreGraphicsState();
    }


    // Logo
    if (logoData) {
      doc.addImage(logoData, 'PNG', 15, 8, 25, 25);
    }

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('PURE TANK CLEANING', 45, 22);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Certified Professional Water Tank Cleaning Services', 45, 29);

    // Company Info (Right Side)
    doc.setFontSize(8);
    const englishAddress = "95, Greater Ratan Avenue, MR-5 Maksi Road, Ujjain 456006 (M.P.)";
    doc.text(englishAddress, 195, 15, { align: 'right' });
    doc.text(`Phone: +91 ${COMPANY_PHONE}`, 195, 20, { align: 'right' });
    doc.text(`Email: ${COMPANY_EMAIL}`, 195, 25, { align: 'right' });
    doc.text('Website: www.puretankcleaning.in', 195, 30, { align: 'right' });

    // Bill To Section
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE TO:', 20, 60);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(customerName.toUpperCase() || 'VALUED CUSTOMER', 20, 67);
    doc.text(`Contact: ${customerPhone || 'N/A'}`, 20, 72);

    // Invoice Meta
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE DETAILS:', 190, 60, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.text(`Bill No: ${invoiceNum}`, 190, 67, { align: 'right' });
    doc.text(`Date: ${date}`, 190, 72, { align: 'right' });

    // Translate Data for PDF (Fixing Hindi Encoding)
    const translateService = (name: string) => {
      return name
        .replace('प्लास्टिक', 'Plastic')
        .replace('सीमेंट', 'Cement')
        .replace('टैंक', 'Tank')
        .replace('रेट', '')
        .replace('लीटर', 'Liters')
        .trim();
    };

    const tableData = selectedServices.map((s, i) => [
      i + 1,
      translateService(s.name),
      `Rs. ${s.price}`,
      `${s.quantity}`,
      `Rs. ${s.price * s.quantity}`
    ]);

    const grandTotal = selectedServices.reduce((sum, s) => sum + (s.price * s.quantity), 0);

    autoTable(doc, {
      startY: 85,
      head: [['S.NO', 'SERVICE DESCRIPTION', 'UNIT RATE', 'QTY', 'AMOUNT']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: primaryColor as [number, number, number],
        fontSize: 9,
        fontStyle: 'bold',
        halign: 'center'
      },
      styles: {
        fontSize: 9,
        cellPadding: 4,
      },
      columnStyles: {
        0: { halign: 'center', cellWidth: 15 },
        1: { cellWidth: 95 },
        2: { halign: 'right', cellWidth: 30 },
        3: { halign: 'center', cellWidth: 25 },
        4: { halign: 'right', cellWidth: 30 },
      },
    });

    // Summary Section
    const finalY = (doc as any).lastAutoTable.finalY + 10;

    doc.setFillColor(245, 245, 245);
    doc.rect(130, finalY, 65, 12, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('GRAND TOTAL:', 135, finalY + 8);
    doc.text(`Rs. ${grandTotal}/-`, 190, finalY + 8, { align: 'right' });

    // Payment Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Methods:', 20, finalY + 5);
    doc.setFont('helvetica', 'normal');
    doc.text('• Cash on Service', 20, finalY + 10);
    doc.text('• UPI / Online Transfer', 20, finalY + 15);

    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, pageHeight - 20, 210, 20, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('"Saf Tank - Swasth Pariwar"', 105, pageHeight - 11, { align: 'center' });
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for your business! Stay Healthy, Stay Pure.', 105, pageHeight - 5, { align: 'center' });

    // Save PDF
    doc.save(`Invoice_${customerName.replace(/\s+/g, '_') || 'Customer'}_${date}.pdf`);
  };

  const addService = (name: string, price: string | number, quantity: number = 1) => {
    const numericPrice = typeof price === 'string' ? parseInt(price.replace(/\D/g, '')) : price;
    if (isNaN(numericPrice)) return;

    // If it's a predefined service from the list, we might want to aggregate
    // But the user said "separate both tanks", so maybe always add as a new item?
    // "fully customizable we can add range of litle by ourseelf remove 500-1000 hardcode"

    setSelectedServices(prev => [...prev, { name, price: numericPrice, quantity }]);
  };

  const updateQuantity = (index: number, delta: number) => {
    setSelectedServices(prev => prev.map((s, i) => {
      if (i === index) {
        const newQty = Math.max(1, s.quantity + delta);
        return { ...s, quantity: newQty };
      }
      return s;
    }));
  };

  const removeService = (index: number) => {
    setSelectedServices(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">

        {/* Header */}
        <div className="bg-[#0B2F5C] p-6 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {showQR ? <QrCode size={24} className="text-blue-400" /> : (isAuthenticated ? <User size={24} className="text-blue-400" /> : <Lock size={24} className="text-blue-400" />)}
              {showQR ? 'Payment QR' : (isAuthenticated ? 'Staff Dashboard' : 'Staff Login')}
            </h2>
            <p className="text-blue-200 text-xs mt-1">
              {showQR ? 'Show this to customer' : (isAuthenticated ? (activeTab === 'report' ? 'Work Completion Report' : activeTab === 'confirm' ? 'Confirm Appointment' : 'Generate Professional Bill') : 'Restricted Area')}
            </p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* content area */}
        <div className="flex-grow overflow-y-auto flex flex-col">
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
            <div className="flex flex-col h-full">
              {/* TABS */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-1">
                <button
                  onClick={() => setActiveTab('report')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 ${activeTab === 'report' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <CheckCircle size={14} /> Report
                </button>
                <button
                  onClick={() => setActiveTab('confirm')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 ${activeTab === 'confirm' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Calendar size={14} /> Confirm
                </button>
                <button
                  onClick={() => setActiveTab('bill')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 ${activeTab === 'bill' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <FileText size={14} /> Bill
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                {/* Common Customer Header */}
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Customer Info</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 text-slate-400" size={16} />
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                          placeholder="Name"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 text-slate-400" size={16} />
                        <input
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                          placeholder="WhatsApp"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {activeTab === 'report' && (
                  /* REPORT FORM */
                  <form onSubmit={handleSendReport} className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Tank Type</label>
                        <select
                          value={tankType}
                          onChange={(e) => setTankType(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                        >
                          <option>Plastic Tank</option>
                          <option>Cemented Tank</option>
                          <option>Underground Sump</option>
                          <option>Full House Cleaning</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Capacity</label>
                        <input
                          type="text"
                          value={tankCapacity}
                          onChange={(e) => setTankCapacity(e.target.value)}
                          placeholder="e.g. 800 - 900 Liters"
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <h4 className="text-green-800 font-bold text-[10px] uppercase mb-1 flex items-center gap-1">
                        <CheckCircle size={12} /> Completion Preview
                      </h4>
                      <p className="text-[11px] text-green-700 leading-relaxed italic">
                        "Your Water Tank Cleaning is successfully completed. Status: Clean & Sanitized..."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button type="button" onClick={() => setShowQR(true)} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm">
                        <QrCode size={18} /> QR
                      </button>
                      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm">
                        <Send size={18} /> Send
                      </button>
                    </div>
                  </form>
                )}

                {activeTab === 'confirm' && (
                  /* CONFIRMATION FORM */
                  <form onSubmit={handleSendConfirmation} className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Select Date</label>
                        <input
                          type="date"
                          required
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Select Time</label>
                        <input
                          type="time"
                          required
                          value={appointmentTime}
                          onChange={(e) => setAppointmentTime(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <h4 className="text-blue-800 font-bold text-[10px] uppercase mb-1 flex items-center gap-1">
                        <Calendar size={12} /> Booking Preview
                      </h4>
                      <p className="text-[11px] text-blue-700 leading-relaxed italic">
                        "Your tank cleaning appointment has been confirmed for {appointmentDate || '...'} at {appointmentTime || '...'}. See you soon!"
                      </p>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm">
                      <Send size={18} /> Send Confirmation
                    </button>
                  </form>
                )}

                {activeTab === 'bill' && (
                  /* BILL FORM */
                  <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                    {/* Entry Form */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Service Details</label>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Tank Type / Service</label>
                        <select
                          value={billTankType}
                          onChange={(e) => setBillTankType(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                        >
                          <option>Plastic Tank</option>
                          <option>Cemented Tank</option>
                          <option>Underground Sump</option>
                          <option>Full House Cleaning</option>
                          <option>Custom Service</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">Liters / Details</label>
                          <input
                            type="text"
                            value={customServiceName}
                            onChange={(e) => setCustomServiceName(e.target.value)}
                            placeholder="e.g. 1000L"
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">Price (₹)</label>
                          <input
                            type="number"
                            value={customServicePrice}
                            onChange={(e) => setCustomServicePrice(e.target.value)}
                            placeholder="Amount"
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (customServicePrice) {
                            const displayName = customServiceName
                              ? `${billTankType} - ${customServiceName}`
                              : billTankType;
                            addService(displayName, customServicePrice);
                            setCustomServiceName('');
                            setCustomServicePrice('');
                          }
                        }}
                        disabled={!customServicePrice}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Plus size={14} /> Add to Bill
                      </button>
                    </div>

                    {selectedServices.length > 0 && (
                      <div className="border-t border-slate-100 pt-3">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Selected Services</label>
                        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                          {selectedServices.map((service, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-blue-50/50 rounded-lg animate-in zoom-in-95 duration-200">
                              <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-slate-700">{service.name}</span>
                                <span className="text-[9px] text-slate-500">₹{service.price} × {service.quantity}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                                  <button
                                    onClick={() => updateQuantity(index, -1)}
                                    className="px-2 py-1 hover:bg-slate-50 text-slate-500 border-r border-slate-100"
                                  >
                                    -
                                  </button>
                                  <span className="px-2 text-[11px] font-bold text-blue-600 min-w-[24px] text-center">
                                    {service.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(index, 1)}
                                    className="px-2 py-1 hover:bg-slate-50 text-slate-500 border-l border-slate-100 font-bold"
                                  >
                                    +
                                  </button>
                                </div>
                                <span className="text-xs font-black text-blue-900 w-16 text-right">₹{service.price * service.quantity}</span>
                                <button onClick={() => removeService(index)} className="p-1 text-red-400 hover:text-red-600 ml-1">
                                  <Trash size={14} />
                                </button>
                              </div>
                            </div>
                          ))}
                          <div className="flex justify-between items-center pt-2 border-t border-dashed border-slate-300 px-2">
                            <span className="font-bold text-slate-900 text-sm">Grand Total:</span>
                            <span className="font-black text-blue-700 text-lg">₹{selectedServices.reduce((sum, s) => sum + (s.price * s.quantity), 0)}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleGenerateBill}
                      disabled={selectedServices.length === 0}
                      className="w-full bg-[#0B2F5C] hover:bg-blue-900 disabled:bg-slate-300 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm"
                    >
                      <Download size={18} /> Download PDF Bill
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-auto px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                <button type="button" onClick={() => setIsAuthenticated(false)} className="text-[10px] text-slate-400 hover:text-red-500 font-bold uppercase tracking-wider">
                  Logout
                </button>
                <p className="text-[10px] text-slate-300 font-medium">Pure Tank v2.1</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;