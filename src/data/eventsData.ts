import heroImg from '../assets/images/hero_wedding_stage_1791820973424.jpg';
import weddingImg from '../assets/images/service_wedding_decor_1791820986101.jpg';
import birthdayImg from '../assets/images/service_birthday_decor_1791820999360.jpg';
import engagementImg from '../assets/images/service_engagement_decor_1791821012278.jpg';
import babyShowerImg from '../assets/images/service_baby_shower_1791821023489.jpg';
import corporateImg from '../assets/images/service_corporate_decor_1791821035737.jpg';
import centerpieceImg from '../assets/images/gallery_centerpiece_1791821073724.jpg';
import bouquetImg from '../assets/images/gallery_bouquet_1791821086484.jpg';
import teamDesignerImg from '../assets/images/team_floral_designer_1791821098464.jpg';

export const assets = {
  hero: heroImg,
  wedding: weddingImg,
  birthday: birthdayImg,
  engagement: engagementImg,
  babyShower: babyShowerImg,
  corporate: corporateImg,
  centerpiece: centerpieceImg,
  bouquet: bouquetImg,
  teamDesigner: teamDesignerImg,
};

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Engagement' | 'Baby Shower' | 'Corporate';
  description: string;
  startingPrice: string;
  image: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'wedding-decor',
    title: 'Wedding Decoration',
    category: 'Wedding',
    description: 'Breathtaking ceremony arches, grand floral mandaps, aisle runners, and romantic reception stage styling with fresh garden blooms.',
    startingPrice: '$2,499',
    image: weddingImg,
    highlights: ['Grand ceremonial stage & arch', 'Candlelit aisle floral runner', 'Bridal table luxury garland', 'Personalized floral moodboard']
  },
  {
    id: 'birthday-decor',
    title: 'Birthday Party Decoration',
    category: 'Birthday',
    description: 'Chic modern backdrops with organic floral arches, custom signage, statement pedestals, and dessert table styling for milestone birthdays.',
    startingPrice: '$899',
    image: birthdayImg,
    highlights: ['Curated themed backdrop', 'Cascading pastel floral towers', 'Gold pedestals & cake stand decor', 'Fairy light accent installation']
  },
  {
    id: 'engagement-decor',
    title: 'Engagement Decoration',
    category: 'Engagement',
    description: 'Enchanting circular floral rings, whimsical twilight lighting, romantic candle displays, and intimate stage settings for unforgettable proposals.',
    startingPrice: '$1,299',
    image: engagementImg,
    highlights: ['Circular 8ft floral ring arch', 'Warm ambient brass lanterns', 'Low-profile seating & rug staging', 'Champagne rose color palette']
  },
  {
    id: 'baby-shower-decor',
    title: 'Baby Shower Decoration',
    category: 'Baby Shower',
    description: 'Dreamy pastel floral installations, clouds of baby’s breath, welcoming garden arches, and cozy floral vignettes celebrating new beginnings.',
    startingPrice: '$799',
    image: babyShowerImg,
    highlights: ['Whimsical baby’s breath clouds', 'Blush & cream floral archway', 'Welcome easel with fresh blooms', 'Themed table centerpieces']
  },
  {
    id: 'corporate-decor',
    title: 'Corporate Event Decoration',
    category: 'Corporate',
    description: 'Prestigious gala tablescapes, tall golden floral risers, executive stage floral podiums, and brand-aligned corporate hospitality styling.',
    startingPrice: '$1,899',
    image: corporateImg,
    highlights: ['Tall gold trumpet floral risers', 'Exotic white orchids & lilies', 'VIP head table cascading floral runner', 'Complete room lighting harmony']
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Engagement' | 'Baby Shower' | 'Corporate';
  image: string;
  tag: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Palace Wedding Stage',
    category: 'Wedding',
    image: heroImg,
    tag: 'Wedding Stage'
  },
  {
    id: 'gal-2',
    title: 'Sunlit Conservatory Floral Aisle',
    category: 'Wedding',
    image: weddingImg,
    tag: 'Floral Arch'
  },
  {
    id: 'gal-3',
    title: 'Heirloom Garden Bridal Bouquet',
    category: 'Wedding',
    image: bouquetImg,
    tag: 'Flower Bouquet'
  },
  {
    id: 'gal-4',
    title: 'Romantic Candlelit Floral Runner',
    category: 'Wedding',
    image: centerpieceImg,
    tag: 'Table Centerpiece'
  },
  {
    id: 'gal-5',
    title: 'Opulent Milestone Birthday Backdrop',
    category: 'Birthday',
    image: birthdayImg,
    tag: 'Birthday Backdrop'
  },
  {
    id: 'gal-6',
    title: 'Starlit Circular Engagement Ring',
    category: 'Engagement',
    image: engagementImg,
    tag: 'Floral Ring'
  },
  {
    id: 'gal-7',
    title: 'Pastel Garden Baby Shower Pavillion',
    category: 'Baby Shower',
    image: babyShowerImg,
    tag: 'Garden Setup'
  },
  {
    id: 'gal-8',
    title: 'Black-Tie Gala Orchid Tablescape',
    category: 'Corporate',
    image: corporateImg,
    tag: 'Corporate Gala'
  }
];

export interface PackageItem {
  name: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const packagesData: PackageItem[] = [
  {
    name: 'Basic Package',
    subtitle: 'Ideal for intimate gatherings, private dinners & small celebrations',
    price: '$799',
    popular: false,
    features: [
      'Single floral backdrop or photo ring',
      '2 table centerpieces with seasonal blooms',
      'Welcome signage with fresh corner floral spray',
      'Up to 4 hours of design & on-site setup',
      'Coordination & takedown included'
    ]
  },
  {
    name: 'Premium Package',
    subtitle: 'Our most requested choice for beautiful weddings & large milestones',
    price: '$1,899',
    popular: true,
    features: [
      'Grand ceremonial floral arch or stage backdrop',
      'Up to 6 luxury guest table centerpieces',
      'Candlelit aisle runner with glass hurricane cylinders',
      'Bridal or head table cascading floral runner',
      'Full delivery, staging, styling & evening teardown',
      'Dedicated on-site floral lead'
    ]
  },
  {
    name: 'Luxury Package',
    subtitle: 'Uncompromising luxury with bespoke exotic blooms & full-venue styling',
    price: '$3,499',
    popular: false,
    features: [
      'Comprehensive 360° venue floral transformation',
      'Hanging floral chandeliers & ceiling draping',
      'Unlimited high-table & low-runner floral centerpieces',
      'Custom stage backdrop with gold pedestals & accents',
      'Bridal party florals (bouquet, boutonnieres & corsages)',
      'VIP lighting package & 2 dedicated event stylists'
    ]
  }
];

export interface Testimonial {
  quote: string;
  author: string;
  event: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    quote: 'Bloom Events turned our wedding reception into an ethereal fairy tale. The cascading garden roses and candle arrangements left our guests breathless. Truly the finest decor team!',
    author: 'Seraphina & David Lin',
    event: 'Grand Ballroom Wedding',
    rating: 5
  },
  {
    quote: 'For my 30th birthday, Bloom Events created the most stunning photo backdrop. Every rose petal was fresh, the gold pedestals were pristine, and the team was effortless to work with.',
    author: 'Sophia Morales',
    event: 'Milestone Birthday Party',
    rating: 5
  },
  {
    quote: 'The floral centerpieces for our annual corporate awards gala were architectural works of art. Dignified, luxurious, and perfectly aligned with our company palette.',
    author: 'Marcus Sterling',
    event: 'Executive Annual Gala',
    rating: 5
  }
];

export const teamData = [
  {
    name: 'Camille Moreau',
    role: 'Lead Floral Designer & Creative Director',
    bio: 'With over 12 years of botanical design experience across Paris and New York, Camille brings an editorial eye and passion for rare heirloom blooms to every creation.',
    image: teamDesignerImg
  },
  {
    name: 'Elena Vance',
    role: 'Principal Event Planner',
    bio: 'Elena choreographs timelines, venue logistics, and staging details with calm precision, ensuring every client feels completely cared for from first consult to final petal.',
    image: weddingImg
  },
  {
    name: 'Marcus Reed',
    role: 'Production & Staging Lead',
    bio: 'Marcus oversees structural fabrication, architectural lighting, safe rigging, and punctual setup so your floral installations remain flawless throughout your celebration.',
    image: corporateImg
  }
];
