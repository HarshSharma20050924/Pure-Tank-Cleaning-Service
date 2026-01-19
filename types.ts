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

export interface SubscriptionPlan {
  title: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface VideoTestimonial {
  id: string;
  customerName: string;
  address: string;
  thumbnailUrl: string;
  videoSrc: string; // Changed: Local path (e.g., "/videos/vid1.mp4")
  duration: string;
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