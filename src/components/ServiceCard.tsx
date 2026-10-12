import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/eventsData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#F0E6E1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Fallback */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF0F2]">
        <img
          src={service.image}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#8C6D1F] border border-[#F4E3BD] shadow-xs">
          Starting at {service.startingPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#C5707F] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.category} Decor</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#2C2422] mb-2.5 group-hover:text-[#B85C6D] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#5A4F4C] leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-6 text-xs text-[#665A56]">
            {service.highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#F5ECE8] flex items-center justify-between">
          <span className="text-xs text-[#827470]">Customized setup included</span>
          <Link
            to={`/book?service=${encodeURIComponent(service.category)}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B85C6D] hover:text-[#933D4E] group-hover:translate-x-0.5 transition-all"
          >
            <span>Book This Decor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
