import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Flower2, Menu, X, CalendarCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Gallery', path: '/services' },
    { name: 'Book an Event', path: '/book' },
    { name: 'About & Contact', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDFB]/95 backdrop-blur-md border-b border-[#F0E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 text-[#2C2422] group whitespace-nowrap shrink-0"
          >
            <span className="w-10 h-10 rounded-full bg-[#FAF0F2] text-[#C5707F] flex items-center justify-center border border-[#F3D5D8] group-hover:bg-[#F8D7DA] transition-colors">
              <Flower2 className="w-5 h-5 text-[#C5707F]" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold tracking-wide text-[#2C2422] leading-none">
                Bloom Events
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#A67C52] mt-0.5">
                Floral & Event Atelier
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-1 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#C5707F] font-semibold border-b-2 border-[#C5707F]'
                      : 'text-[#5A4F4C] hover:text-[#2C2422]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] active:scale-95 transition-all shadow-sm hover:shadow"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Event</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#5A4F4C] hover:text-[#2C2422] hover:bg-[#FAF0F2] focus:outline-none focus:ring-2 focus:ring-[#C5707F]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#F0E6E1] bg-[#FFFDFB] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF0F2] text-[#C5707F] font-semibold'
                      : 'text-[#5A4F4C] hover:bg-[#FBF7F5] hover:text-[#2C2422]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-[#F0E6E1]">
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Event</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
