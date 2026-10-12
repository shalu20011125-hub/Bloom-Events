import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Phone, Mail, Clock, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF6F3] border-t border-[#EDE4DE] text-[#4A3E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#FAF0F2] text-[#C5707F] flex items-center justify-center border border-[#F3D5D8]">
                <Flower2 className="w-5 h-5 text-[#C5707F]" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-wide text-[#2C2422]">
                Bloom Events
              </span>
            </Link>
            <p className="text-sm text-[#665A56] leading-relaxed">
              Curating luxury floral artistry, wedding stages, and celebratory spaces that evoke wonder, romance, and timeless memories.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DED8] flex items-center justify-center text-[#665A56] hover:text-[#C5707F] hover:border-[#C5707F] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DED8] flex items-center justify-center text-[#665A56] hover:text-[#C5707F] hover:border-[#C5707F] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social-youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DED8] flex items-center justify-center text-[#665A56] hover:text-[#C5707F] hover:border-[#C5707F] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#2C2422]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#B85C6D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B85C6D] transition-colors">
                  Services & Gallery
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-[#B85C6D] transition-colors">
                  Book an Event
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B85C6D] transition-colors">
                  About Us & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Decoration Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#2C2422]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-[#665A56]">
              <li>Wedding Mandaps & Floral Arches</li>
              <li>Birthday Backdrops & Photo Booths</li>
              <li>Romantic Engagement Rings & Drapes</li>
              <li>Baby Shower Floral Clouds</li>
              <li>Corporate Gala Tablescapes</li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#2C2422]">
              Studio Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#665A56]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5707F] mt-1 shrink-0" />
                <span>742 Blossom Avenue, Suite 100, Floral Park, NY</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5707F] shrink-0" />
                <span>(555) 321-BLOOM (Sample)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5707F] shrink-0" />
                <span>hello@bloomevents.com (Sample)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5707F] mt-1 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: By Appointment</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#EDE4DE] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#827470]">
          <p>© {new Date().getFullYear()} Bloom Events. All rights reserved.</p>
          <p className="text-center md:text-right">
            Artisanal floral designs, luxury event staging, and celebration planning.
          </p>
        </div>
      </div>
    </footer>
  );
};
