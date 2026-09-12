export interface Product {
  id: string;
  name: string;
  category: 'Office Furniture' | 'Luxury Sofas' | 'TV Consoles' | 'Dining Sets' | 'Bed Frames';
  tagline: string;
  description: string;
  priceFormatted: string;
  priceNote?: string;
  materials: string[];
  dimensions: string;
  leadTime: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  deliveryState: string;
  notes: string;
  projectType: 'Residential' | 'Corporate / Executive Office' | 'Interior Designer / Architect';
}
