import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  PartyPopper, 
  Gem, 
  Baby, 
  Briefcase, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  CalendarDays
} from 'lucide-react';
import { assets, servicesData, testimonialsData } from '../data/eventsData';
import { ServiceCard } from '../components/ServiceCard';

export const Home: React.FC = () => {
  const eventCategories = [
    {
      title: 'Wedding',
      description: 'Grand mandaps, floral arches & dreamy aisle runners.',
      icon: Heart,
      filter: 'Wedding',
      count: '300+ Celebrations'
    },
    {
      title: 'Birthday',
      description: 'Chic modern backdrops & floral milestone pedestals.',
      icon: PartyPopper,
      filter: 'Birthday',
      count: '150+ Parties'
    },
    {
      title: 'Engagement',
      description: 'Romantic floral rings, candlelit aisles & proposals.',
      icon: Gem,
      filter: 'Engagement',
      count: '200+ Ceremonies'
    },
    {
      title: 'Baby Shower',
      description: 'Delicate pastel blooms & whimsical garden clouds.',
      icon: Baby,
      filter: 'Baby Shower',
      count: '120+ Gatherings'
    },
    {
      title: 'Corporate Events',
      description: 'Prestigious gala tablescapes & executive stage florals.',
      icon: Briefcase,
      filter: 'Corporate',
      count: '90+ Galas'
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFFBF9] to-white pt-10 pb-16 lg:py-24 border-b border-[#F5ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] text-[#B85C6D] border border-[#F3D5D8] text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Floral & Event Atelier</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2422] leading-[1.15] text-balance">
                Make Every Moment <span className="italic text-[#B85C6D] font-normal">Bloom</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A4F4C] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Beautiful Flower Decorations for Your Most Special Moments. From royal wedding stages and intimate engagements to lavish milestone birthdays, we craft breathtaking floral memories.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#B85C6D] hover:bg-[#A34E5E] active:scale-95 transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#2C2422] bg-white border border-[#E8DED8] hover:bg-[#FAF6F3] hover:border-[#D4AF37] transition-all shadow-xs"
                >
                  <CalendarDays className="w-4 h-4 text-[#A67C52]" />
                  <span>Book Your Event</span>
                </Link>
              </div>

              {/* Quality Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#F0E6E1] text-left">
                <div>
                  <p className="font-display text-2xl font-bold text-[#2C2422]">100%</p>
                  <p className="text-xs text-[#827470]">Fresh Cut Florals</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#2C2422]">850+</p>
                  <p className="text-xs text-[#827470]">Events Styled</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#2C2422]">4.9★</p>
                  <p className="text-xs text-[#827470]">Client Rating</p>
                </div>
              </div>

            </div>

            {/* Hero Right Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-16/10">
                  <img
                    src={assets.hero}
                    alt="Stunning wedding stage lavishly decorated with flowers"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#F4E3BD] font-medium mb-1">
                      Grand Ceremonial Stage
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-semibold">
                      Luxury Floral Mandap & Reception Styling
                    </p>
                  </div>
                </div>

                {/* Floating Aesthetic Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F0E6E1] shadow-xl hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0F2] flex items-center justify-center text-[#B85C6D]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2C2422]">Bespoke Botanical Styling</p>
                    <p className="text-[11px] text-[#7A6E6A]">Custom color palettes for every event</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Event Category Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
            Curated Experiences
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
            Celebration Categories
          </h2>
          <p className="text-sm sm:text-base text-[#665A56] mt-3">
            Every occasion deserves an ambiance that reflects the grandeur and joy of your milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {eventCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/services?category=${encodeURIComponent(cat.filter)}`}
                className="group bg-white p-6 rounded-2xl border border-[#F0E6E1] shadow-xs hover:shadow-md hover:border-[#D4AF37] transition-all flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFF5F6] text-[#B85C6D] flex items-center justify-center group-hover:bg-[#B85C6D] group-hover:text-white transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#2C2422] mb-2 group-hover:text-[#B85C6D] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#665A56] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F7EFEA] flex items-center justify-between text-[11px] text-[#8C6D1F] font-semibold">
                  <span>{cat.count}</span>
                  <span className="text-[#B85C6D] group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Decoration Designs Section */}
      <section className="bg-[#FAF6F3] py-20 border-y border-[#EDE4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
                Handcrafted Mastery
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
                Popular Decoration Designs
              </h2>
              <p className="text-sm sm:text-base text-[#665A56] mt-2 max-w-xl">
                Explore our signature floral collections featuring fresh luxury blooms and customized architectural setups.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B85C6D] hover:text-[#933D4E] transition-colors shrink-0"
            >
              <span>View All Services & Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Short About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#F0E6E1] p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D]">
                About Bloom Events
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422] leading-tight">
                Turning Visions into Floral Masterpieces
              </h2>
              <p className="text-sm sm:text-base text-[#5A4F4C] leading-relaxed">
                Founded with a deep devotion to botanical elegance and celebration design, Bloom Events brings together master florists, experienced event architects, and styling artisans.
              </p>
              <p className="text-sm sm:text-base text-[#5A4F4C] leading-relaxed">
                We believe every milestone deserves more than simple decor — it deserves an unforgettable sensory atmosphere filled with delicate aromas, soft hues, and radiant candlelight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#2C2422]">Farm-Fresh Selection</h4>
                    <p className="text-xs text-[#7A6E6A]">Directly sourced premium flowers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#2C2422]">Flawless Setup</h4>
                    <p className="text-xs text-[#7A6E6A]">On-time installation & takedown.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={assets.engagement}
                  alt="Floral arch staging"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-md mt-6">
                <img
                  src={assets.centerpiece}
                  alt="Floral table centerpiece"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
            Client Words
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
            What Our Clients Say
          </h2>
          <p className="text-sm text-[#665A56] mt-2">
            Sample client reviews reflecting our passion for floral styling and seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-[#F0E6E1] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-[#4A3E3D] italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5ECE8]">
                <h4 className="text-sm font-bold text-[#2C2422]">
                  {review.author}
                </h4>
                <p className="text-xs text-[#8C6D1F] font-medium mt-0.5">
                  {review.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
