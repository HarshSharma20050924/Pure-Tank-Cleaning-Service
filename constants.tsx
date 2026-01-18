import { 
  Droplets, 
  ShieldCheck, 
  Factory, 
  Trash2, 
  Zap, 
  ClipboardCheck,
  HardHat,
  Biohazard,
  Wrench,
  Clock,
  SprayCan // Changed from Sparkles for pressure washing to look less generic
} from 'lucide-react';
import { ServiceItem, ProcessStep, PricingTier, FAQItem, Testimonial } from './types';

export const COMPANY_PHONE = "8109958822";
export const COMPANY_EMAIL = "pure_tank810@gmail.com"; 
// Added pre-filled text to the URL
export const WHATSAPP_LINK = "https://wa.me/918109958822?text=Hello%20Pure%20Tank%2C%20I%20want%20to%20book%20a%20cleaning%20service.";
export const COMPANY_ADDRESS = "95, ग्रेटर रतन एवेन्यू, MR-5 मक्सी रोड, उज्जैन 456006 (म.प्र.)";
export const INSTAGRAM_LINK = "https://instagram.com/pure_tank810";

export const SERVICES: ServiceItem[] = [
  {
    id: 'plastic',
    title: 'प्लास्टिक टैंक (Plastic Tank)',
    description: 'सिंटेक्स और पीवीसी (PVC) टंकियों की पूरी सफाई। काई (Algae) और धूल-मिट्टी को जड़ से हटाया जाता है।',
    icon: Droplets,
  },
  {
    id: 'cement',
    title: 'सीमेंट की टंकी (Cemented Tank)',
    description: 'छत वाली पक्की टंकियों की घिसाई और डीप क्लीनिंग ताकि सालों पुरानी गंदगी साफ हो सके।',
    icon: HardHat,
  },
  {
    id: 'underground',
    title: 'अंडरग्राउंड टैंक (Underground Tank)',
    description: 'जमीन के नीचे बने पानी के टांके (Sump) की वैक्यूम मशीन द्वारा सफाई।',
    icon: Factory,
  },
  {
    id: 'other',
    title: 'पाइप और अन्य सफाई',
    description: 'पाइप लाइन चोक होने पर सफाई और बाथरूम फिटिंग की सफाई सुविधा भी उपलब्ध है।',
    icon: Wrench,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'डी-वाटरिंग (De-Watering)',
    description: 'हाई-स्पीड पंप का उपयोग करके गंदे पानी को बाहर निकालना।',
    icon: Zap,
  },
  {
    id: 2,
    title: 'स्क्रबिंग / घिसाई (Scrubbing)',
    description: 'दीवारों और फर्श पर जमी काई और गंदगी को मशीन से रगड़ कर साफ करना।',
    icon: Wrench,
  },
  {
    id: 3,
    title: 'स्लज रिमूवल (Sludge Removal)',
    description: 'तले में बैठी गाद, कीचड़ और मिट्टी को बाहर निकालना।',
    icon: Trash2,
  },
  {
    id: 4,
    title: 'वैक्यूम क्लीनिंग (Vacuum Cleaning)',
    description: 'वैक्यूम मशीन से कोने-कोने में छिपी गंदगी को खींच कर बाहर निकालना।',
    icon: Factory,
  },
  {
    id: 5,
    title: 'प्रेशर वॉशिंग (Pressure Washing)',
    description: 'अंत में हाई-प्रेशर जेट स्प्रे से धुलाई ताकि टंकी बिल्कुल नई जैसी हो जाए।',
    icon: SprayCan, // Changed icon
  },
];

export const PRICING_DATA: PricingTier[] = [
  {
    category: 'प्लास्टिक टैंक रेट',
    items: [
      { capacity: '500 - 1,000 लीटर', price: '₹500', description: 'साधारण आकार' },
      { capacity: '1,500 - 2,000 लीटर', price: '₹700', description: 'मध्यम आकार' },
      { capacity: '3,000 - 5,000 लीटर', price: '₹1000', description: 'बड़ा आकार' },
    ],
  },
  {
    category: 'सीमेंट टैंक रेट',
    items: [
      { capacity: '500 - 1,000 लीटर', price: '₹600', description: 'पक्की टंकी' },
      { capacity: '1,500 - 2,000 लीटर', price: '₹800', description: 'पक्की टंकी' },
      { capacity: '3,000 - 5,000 लीटर', price: '₹1200', description: 'पक्की टंकी' },
    ],
  },
];

export const QUALITY_POINTS = [
  { text: "शुद्ध और सुरक्षित सफाई", icon: ShieldCheck },
  { text: "किफायती दाम", icon: ClipboardCheck },
  { text: "समय पर सर्विस", icon: Clock },
  { text: "ग्राहक संतुष्टि की गारंटी", icon: Biohazard },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "अमित शर्मा",
    location: "मक्सी रोड, उज्जैन",
    type: "Residential",
    text: "भैया ने बहुत अच्छी सफाई की। टंकी एकदम नई जैसी हो गई। रेट भी बाकियों से सही है।",
  },
  {
    id: 2,
    name: "विजय सिंह",
    location: "फ्रीगंज",
    type: "Commercial",
    text: "मुझे अर्जेंट सर्विस चाहिए थी, टीम उसी दिन आ गई। काम बहुत प्रोफेशनल तरीके से किया।",
  },
  {
    id: 3,
    name: "श्रीमती जोशी",
    location: "ऋषि नगर",
    type: "Residential",
    text: "पहले पानी से बदबू आती थी, अब पानी बिल्कुल साफ है। प्योर टैंक सर्विस भरोसेमंद है।",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "क्या आप अंडरग्राउंड टैंक (टांका) साफ करते हैं?",
    answer: "जी हाँ, हम अंडरग्राउंड पानी के टैंक की सफाई वैक्यूम मशीन से करते हैं। चार्ज ₹1500 से शुरू होते हैं (आकार और स्थिति पर निर्भर)।",
  },
  {
    question: "क्या इमरजेंसी सर्विस उपलब्ध है?",
    answer: "जी हाँ, 'सेम डे सर्विस' (Same Day Service) उपलब्ध है। इसके लिए ₹200 एक्स्ट्रा चार्ज लगता है।",
  },
  {
    question: "सफाई में कितना समय लगता है?",
    answer: "प्लास्टिक टैंक में लगभग 30-45 मिनट लगते हैं। सीमेंट की टंकी में थोड़ा ज्यादा समय लग सकता है।",
  },
  {
    question: "क्या रविवार (Sunday) को दुकान खुली रहती है?",
    answer: "हम मंगलवार से रविवार (Tuesday to Sunday) तक काम करते हैं। सोमवार (Monday) को हमारी छुट्टी रहती है।",
  },
];