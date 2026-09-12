import { Product } from '../types';

import heroImg from '../assets/images/stl_luxury_hero_1789201214697.jpg';
import officeImg from '../assets/images/office_furniture_1789201227988.jpg';
import sofaImg from '../assets/images/luxury_sofas_1789201240041.jpg';
import consoleImg from '../assets/images/tv_consoles_1789201252386.jpg';
import diningImg from '../assets/images/dining_sets_1789201263990.jpg';
import bedImg from '../assets/images/bed_frames_1789201277456.jpg';

export const HERO_IMAGE = heroImg;

export const CATEGORIES = [
  'All Collections',
  'Office Furniture',
  'Luxury Sofas',
  'TV Consoles',
  'Dining Sets',
  'Bed Frames',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'stl-of-01',
    name: 'Presidential Executive Walnut Desk Suite',
    category: 'Office Furniture',
    tagline: 'Commanding presence engineered for boardroom leaders and C-suite executives',
    description:
      'Engineered from American black walnut with brushed champange brass inlay, soft-closing Blum drawer runners, integrated wireless charging dock, and concealed high-current cable channel conduits.',
    priceFormatted: '₦1,850,000',
    priceNote: 'Includes executive modesty panel & matching return credenza',
    materials: ['Solid American Black Walnut', 'Brushed Brass', 'Italian Saddle Leather Writing Pad'],
    dimensions: '240cm (W) × 110cm (D) × 76cm (H)',
    leadTime: 'In Stock / Ready for Dispatch (3-5 Days nationwide)',
    image: officeImg,
    badge: 'Executive Bestseller',
    featured: true,
  },
  {
    id: 'stl-sf-01',
    name: 'Aurelia Curved Modular Sectional Sofa',
    category: 'Luxury Sofas',
    tagline: 'Sculptural comfort upholstered in high-density bouclé and charcoal velvet',
    description:
      'A masterclass in organic architecture. Features high-resilience memory foam core, kiln-dried Nigerian hardwood frame, anti-sag sinuous suspension, and stain-resistant European velvet upholstery.',
    priceFormatted: '₦2,950,000',
    priceNote: 'Custom configurations available in 3, 4, or 5-module sets',
    materials: ['Obeche Kiln-Dried Hardwood', 'High-Density Dual-Foam', 'Textured Charcoal Bouclé'],
    dimensions: '360cm (L) × 180cm (Chaise D) × 82cm (H)',
    leadTime: 'Made to Order (7-10 Business Days)',
    image: sofaImg,
    badge: 'Signature Piece',
    featured: true,
  },
  {
    id: 'stl-tv-01',
    name: 'Nero Marquina Fluted Media Console',
    category: 'TV Consoles',
    tagline: 'Architectural fluted timber crowned with genuine Spanish black marble',
    description:
      'Hand-fluted smoked oak panels paired with a honed Nero Marquina marble slab. Includes IR-pass acoustic slatted doors, ventilated AV hardware bays, and soft-glow concealed under-cabinet warmth.',
    priceFormatted: '₦1,420,000',
    priceNote: 'Suitable for 65" to 98" displays',
    materials: ['Honed Nero Marquina Marble', 'Smoked Oak Veneer', 'Brushed Bronze Handles'],
    dimensions: '260cm (W) × 48cm (D) × 52cm (H)',
    leadTime: 'In Stock (Immediate Dispatch in Lagos / 48hr nationwide)',
    image: consoleImg,
    badge: 'Architectural Grade',
    featured: true,
  },
  {
    id: 'stl-ds-01',
    name: 'Monolith 8-Seater Smoked Oak Dining Table',
    category: 'Dining Sets',
    tagline: 'Refined gathering center with sculptural pedestal base and tailored seating',
    description:
      'Dramatic cantilevered pedestal base crafted from solid kiln-dried timber supporting a seamless chamfered tabletop. Accompanied by 8 ergonomically contoured dining armchairs in stain-treated performance weave.',
    priceFormatted: '₦3,600,000',
    priceNote: 'Complete set with 8 bespoke tailored dining armchairs',
    materials: ['Kiln-Dried Solid Smoked Oak', 'Nero Ceramic Inlay Option', 'Brushed Gold Ferrules'],
    dimensions: '280cm (L) × 110cm (W) × 76cm (H)',
    leadTime: '10-12 Business Days with White-Glove Setup',
    image: diningImg,
    badge: 'Full Dining Suite',
    featured: true,
  },
  {
    id: 'stl-bf-01',
    name: 'Vanguard Floating Architectural King Bed',
    category: 'Bed Frames',
    tagline: 'Hotel presidential suite luxury with cantilevered nightstands and ambient glow',
    description:
      'Low-profile floating platform bed frame with integrated upholstered acoustic headboard, dual floating smoked walnut nightstands, and concealed warm LED perimeter illumination for an ethereal bedroom aesthetic.',
    priceFormatted: '₦2,400,000',
    priceNote: 'Standard 6ft × 6ft King or 7ft Super King dimensions',
    materials: ['Heavy Gauge Internal Steel Skeleton', 'Hardwood Veneer', 'Belgian Linen Headboard'],
    dimensions: '220cm (W) × 235cm (L) × 120cm (Headboard H)',
    leadTime: '7-9 Business Days',
    image: bedImg,
    badge: 'Master Suite Edition',
    featured: true,
  },
  {
    id: 'stl-of-02',
    name: 'Ergonomic Ergotech CEO High-Back Leather Chair',
    category: 'Office Furniture',
    tagline: 'Synchronized tilt mechanism with top-grain Italian leather',
    description:
      'Dynamic lumbar support, polished aluminum die-cast base, pneumatic height adjustment, and Italian top-grain leather designed for 12+ hour peak executive productivity without fatigue.',
    priceFormatted: '₦680,000',
    priceNote: '3-Year Manufacturer Warranty included',
    materials: ['Top-Grain Italian Cowhide', 'Aircraft-Grade Cast Aluminum', 'Class 4 Heavy Gas Lift'],
    dimensions: '68cm (W) × 65cm (D) × 124-132cm (H)',
    leadTime: 'In Stock / Ready to Ship',
    image: officeImg,
    badge: 'Ergonomic Certified',
  },
  {
    id: 'stl-sf-02',
    name: 'Mayfair 3-Seater Chesterfield in Aged Espresso Leather',
    category: 'Luxury Sofas',
    tagline: 'Timeless deep-buttoned tufting with hand-hammered antique brass studs',
    description:
      'An iconic statement piece crafted using traditional hand-tufting techniques, premium oil-wax pull-up leather that patinas gracefully with age, and hand-turned solid mahogany feet.',
    priceFormatted: '₦2,100,000',
    priceNote: 'Available in Vintage Espresso, Cognac Tan, and Obsidian Black',
    materials: ['Aged Pull-Up Italian Leather', 'Solid Mahogany Core', 'Individually Pocketed Coils'],
    dimensions: '235cm (W) × 98cm (D) × 78cm (H)',
    leadTime: '5-7 Business Days',
    image: sofaImg,
  },
  {
    id: 'stl-tv-02',
    name: 'Metropolis Wall-Mounted Floating Credenza',
    category: 'TV Consoles',
    tagline: 'Minimalist low-profile floating media unit with touch-to-open fluted drawers',
    description:
      'Floating wall-mounted architecture providing an uncluttered aesthetic. Features heavy-duty French cleat steel mounting system, acoustically transparent mesh speaker section, and cable conduit ports.',
    priceFormatted: '₦980,000',
    priceNote: 'Includes professional wall mounting & level calibration in Lagos',
    materials: ['E1 Moisture-Resistant MDF', 'Smoked Walnut Finish', 'Matte Black Anodized Trim'],
    dimensions: '200cm (W) × 40cm (D) × 35cm (H)',
    leadTime: 'In Stock / 3 Days Delivery',
    image: consoleImg,
  },
];

export const NIGERIA_STATES = [
  'Lagos (Same-Day / 24-48hr Showroom & White Glove Delivery)',
  'Abuja FCT (Central Business District, Maitama, Wuse, Asokoro)',
  'Rivers (Port Harcourt, GRA, Old GRA, Trans-Amadi)',
  'Oyo (Ibadan, Bodija, Oluyole, Jericho)',
  'Ogun (Abeokuta, Sagamu, Mowe, Magboro)',
  'Edo (Benin City, GRA)',
  'Delta (Asaba, Warri)',
  'Enugu (Enugu Urban, Independence Layout)',
  'Anambra (Awka, Onitsha, Nnewi)',
  'Kano (Kano Municipal, Nassarawa, Bompai)',
  'Kaduna (Kaduna North, Millennium City)',
  'Akwa Ibom (Uyo, Eket)',
  'Cross River (Calabar)',
  'Ondo (Akure)',
  'Osun (Osogbo, Ile-Ife)',
  'Kwara (Ilorin)',
  'Plateau (Jos)',
  'Imo (Owerri)',
  'Abia (Umuahia, Aba)',
  'Bayelsa (Yenagoa)',
  'Benue (Makurdi)',
  'Other States across Nigeria (Nationwide Freight Network)',
];

export const WHY_CHOOSE_US = [
  {
    title: 'Architectural-Grade Proportions',
    subtitle: 'Designed for Contemporary African Living',
    description:
      'We do not build generic scaled furniture. Every STL piece is tailored for the high ceilings, spacious floor plans, and dignified spatial requirements of executive Nigerian estates and corporate suites.',
  },
  {
    title: 'Kiln-Dried Hardwood & Premium Ingot Metals',
    subtitle: 'Built to Endure the Tropical Climate',
    description:
      'Nigeria’s humidity challenges imported particle board. STL uses rigorously kiln-dried indigenous hardwoods, anti-termite treatments, Italian top-grain leathers, and PVD rust-proof stainless hardware.',
  },
  {
    title: 'Nationwide White-Glove Delivery',
    subtitle: 'Direct from Oja, Lagos to All 36 States',
    description:
      'Our dedicated logistics network delivers directly to your estate or office anywhere in Nigeria. Our uniformed installation crew unboxes, positions, levels, and inspects every item on-site.',
  },
  {
    title: 'Dedicated Commercial & Residential Advisory',
    subtitle: 'Complimentary 3D Space Optimization',
    description:
      'Collaborate directly with our in-house interior consultants. We review your floor plans, deliver 3D finish visualizations, and provide physical timber and fabric swatches before final production.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'STL completely transformed our executive office in Victoria Island and our private residence in Ikoyi. The walnut conference suite and the Aurelia curved sofa are in a league of their own.',
    client: 'Arc. Babatunde Alabi, FNIA',
    role: 'Principal Partner, Studio Metropole Architects, Lagos',
  },
  {
    quote:
      'Ordering bespoke luxury furniture to Abuja usually involves endless delays or transit damages. STL delivered our complete 8-seater dining suite and master bed frame to Maitama flawlessly within 5 days.',
    client: 'Dr. Fatima Shehu-Kano',
    role: 'Managing Director, Horizon Energy Capital, Abuja FCT',
  },
  {
    quote:
      'The craftsmanship of the Nero Marquina console and presidential desk speaks volumes. Their communication was crisp, professional, and delivered right on schedule.',
    client: 'Engr. Chidi Okafor',
    role: 'CEO, PrimeLogistics & Marine Services, Port Harcourt',
  },
];
