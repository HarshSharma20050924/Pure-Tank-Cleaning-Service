import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  category: string;
  items: {
    capacity: string;
    price: string;
    description: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  type: 'Residential' | 'Commercial';
  text: string;
}