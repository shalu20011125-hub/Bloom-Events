import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, Layers, Eye } from 'lucide-react';
import { servicesData, galleryData, packagesData } from '../data/eventsData';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesGallery: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory);
  const [activeModalImage, setActiveModalImage] = useState<{ title: string; image: string; tag: string } | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedFilter(cat);
    }
  }, [searchParams]);

  const filterCategories = ['All', 'Wedding', 'Birthday', 'Engagement', 'Baby Shower', 'Corporate'];

  const filteredGallery = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedFilter);

  const filteredServices = selectedFilter === 'All'
    ? servicesData
    : servicesData.filter((service) => service.category === selectedFilter);

  return (
    <div className="py-12 lg:py-20 space-y-20 lg:space-y-28">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D]">
            Artisanal Floral Experiences
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2422]">
            Our Services & Design Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F4C] leading-relaxed">
            Discover our comprehensive flower decoration services, handcrafted photo backdrops, and signature decor packages designed to elevate your celebration into an enchanting memory.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#F0E6E1] pb-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#2C2422]">
              Specialized Decoration Services
            </h2>
            <p className="text-sm text-[#7A6E6A] mt-1">
              Select any service to view custom options or enquire directly.
            </p>
          </div>
          <span className="text-xs text-[#8C6D1F] font-semibold bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#F4E3BD] self-start sm:self-auto">
            All prices are sample estimates
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Interactive Photo Gallery Section with Working Filters */}
      <section className="bg-[#FAF6F3] py-20 border-y border-[#EDE4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
              Visual Inspiration
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
              Floral Design Gallery
            </h2>
            <p className="text-sm text-[#665A56] mt-2">
              Browse our bespoke wedding stages, floral arches, bridal bouquets, table centerpieces, and backdrop installations.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#B85C6D] text-white shadow-sm'
                      : 'bg-white text-[#5A4F4C] border border-[#E8DED8] hover:border-[#B85C6D] hover:text-[#B85C6D]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalImage(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#EFE5E0] shadow-xs hover:shadow-md cursor-pointer transition-all"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-[#FAF0F2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F4E3BD] mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-display text-lg font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-white/90">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view</span>
                  </div>
                </div>

                <div className="p-4 sm:hidden">
                  <p className="text-xs text-[#8C6D1F] font-semibold">{item.tag}</p>
                  <h4 className="font-display text-base font-bold text-[#2C2422]">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#D9CBC4]">
              <p className="text-[#5A4F4C] text-sm">No items found for this category.</p>
              <button
                onClick={() => setSelectedFilter('All')}
                className="mt-3 text-xs font-semibold text-[#B85C6D] underline"
              >
                Reset to All
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Decoration Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
            Curated Bundles
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
            Signature Decoration Packages
          </h2>
          <p className="text-sm text-[#665A56] mt-2">
            Transparent, all-inclusive packages with fresh florals, delivery, setup, and dedicated on-site styling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? 'bg-white border-2 border-[#B85C6D] shadow-xl ring-4 ring-[#FAF0F2]'
                  : 'bg-white border border-[#F0E6E1] shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B85C6D] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A67C52] mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Decoration Tier</span>
                </div>

                <h3 className="font-display text-3xl font-bold text-[#2C2422]">
                  {pkg.name}
                </h3>

                <p className="text-xs text-[#7A6E6A] mt-2 min-h-[36px]">
                  {pkg.subtitle}
                </p>

                <div className="my-6 pb-6 border-b border-[#F5ECE8]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-[#2C2422]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#827470]">/ sample event</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2C2422]">
                    Package Inclusions:
                  </p>
                  <ul className="space-y-3 text-sm text-[#5A4F4C]">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book This Decoration Button */}
              <Link
                to={`/book?package=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-[#B85C6D] hover:bg-[#A34E5E] text-white shadow-md'
                    : 'bg-[#FAF6F3] hover:bg-[#F2EAE4] text-[#2C2422] border border-[#E8DED8]'
                }`}
              >
                <span>Book This Decoration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-16/10 w-full overflow-hidden bg-black">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B85C6D]">
                  {activeModalImage.tag}
                </p>
                <h3 className="font-display text-2xl font-bold text-[#2C2422]">
                  {activeModalImage.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to={`/book?service=${encodeURIComponent(activeModalImage.tag)}`}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-all"
                  onClick={() => setActiveModalImage(null)}
                >
                  Book This Design
                </Link>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#5A4F4C] hover:bg-[#FAF0F2] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
