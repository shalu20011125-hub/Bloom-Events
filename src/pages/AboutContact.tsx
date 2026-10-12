import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Award, 
  Clock, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { teamData, testimonialsData } from '../data/eventsData';

export const AboutContact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [contactErrors, setContactErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!contactForm.name.trim()) errors.name = 'Please provide your name.';
    if (!contactForm.email.trim()) {
      errors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = 'Please provide a valid email.';
    }
    if (!contactForm.subject.trim()) errors.subject = 'Please specify a subject.';
    if (!contactForm.message.trim()) errors.message = 'Please include a message.';

    setContactErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleResetContact = () => {
    setSubmitted(false);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setContactErrors({});
  };

  return (
    <div className="py-12 lg:py-20 space-y-20 lg:space-y-28">
      
      {/* Hero / Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D]">
            Our Story & Craft
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2422]">
            We Bring Your Beautiful Moments to Life
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F4C] leading-relaxed">
            At Bloom Events, flower decoration is not just a service — it is an art of celebrating human emotion. For over a decade, we have created captivating environments for weddings, birthdays, engagements, and prestige gatherings.
          </p>
          
          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-all shadow-md"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F3] rounded-3xl border border-[#EDE4DE] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDFB] text-[#8C6D1F] border border-[#F4E3BD] text-xs font-semibold uppercase tracking-wide">
                <Target className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
                Infusing Celebrations with Grace & Botanical Wonder
              </h2>
              <p className="text-sm sm:text-base text-[#5A4F4C] leading-relaxed">
                Our mission is to relieve the stress of event planning by providing breathtaking, punctual, and personalized floral decor that tells our clients' unique stories.
              </p>
              <p className="text-sm sm:text-base text-[#5A4F4C] leading-relaxed">
                Whether you dream of a delicate garden aisle dusted with rose petals or a grand ballroom illuminated by cascading crystal chandeliers, our artisans bring heartfelt intention to every blossom.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#EFE5E0] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#2C2422] mb-1">Artisan Mastery</h4>
                <p className="text-xs text-[#665A56] leading-relaxed">
                  Every arrangement is composed by certified florists trained in European botanical styling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#EFE5E0] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center mb-3">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#2C2422] mb-1">Ethical Florals</h4>
                <p className="text-xs text-[#665A56] leading-relaxed">
                  We partner directly with sustainable growers for pesticide-free, freshly harvested blooms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#EFE5E0] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#2C2422] mb-1">Punctual Staging</h4>
                <p className="text-xs text-[#665A56] leading-relaxed">
                  Guaranteed completion 2 hours prior to guest arrival with quiet post-party takedown.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#EFE5E0] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#2C2422] mb-1">Bespoke Palettes</h4>
                <p className="text-xs text-[#665A56] leading-relaxed">
                  Tailored color stories matched with your bridal attire, invitations, and venue lighting.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
            The Creative Minds
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
            Meet Our Creative Team
          </h2>
          <p className="text-sm text-[#665A56] mt-2">
            Passionate botanical artists and event coordinators dedicated to making your celebration unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-[#F0E6E1] shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-[#FAF0F2]">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#2C2422]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#B85C6D] uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#5A4F4C] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#FAF6F3] py-20 border-y border-[#EDE4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-2">
              The Bloom Events Standard
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
              Why Choose Bloom Events?
            </h2>
            <p className="text-sm text-[#665A56] mt-2">
              We stand apart through obsessive botanical quality, honest pricing, and white-glove event hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#EDE4DE] shadow-xs">
              <span className="font-display text-3xl font-bold text-[#D4AF37] block mb-2">01</span>
              <h4 className="font-display text-xl font-bold text-[#2C2422] mb-2">Pristine Fresh Blooms</h4>
              <p className="text-xs text-[#665A56] leading-relaxed">
                Imported Ecuadorian roses, Dutch tulips, and Japanese sweet peas treated with specialized flower food for vibrant longevity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE4DE] shadow-xs">
              <span className="font-display text-3xl font-bold text-[#D4AF37] block mb-2">02</span>
              <h4 className="font-display text-xl font-bold text-[#2C2422] mb-2">Custom Mockups</h4>
              <p className="text-xs text-[#665A56] leading-relaxed">
                Prior to your wedding, we create physical sample centerpieces so you can see, touch, and smell the arrangements in person.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE4DE] shadow-xs">
              <span className="font-display text-3xl font-bold text-[#D4AF37] block mb-2">03</span>
              <h4 className="font-display text-xl font-bold text-[#2C2422] mb-2">Structural Safety</h4>
              <p className="text-xs text-[#665A56] leading-relaxed">
                All 8ft+ arches and overhead ceiling installations are certified for venue weight limits and tested against wind gusts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE4DE] shadow-xs">
              <span className="font-display text-3xl font-bold text-[#D4AF37] block mb-2">04</span>
              <h4 className="font-display text-xl font-bold text-[#2C2422] mb-2">Zero Hidden Fees</h4>
              <p className="text-xs text-[#665A56] leading-relaxed">
                Delivery, styling vessels, candle glass cylinders, and late-night strike fees are spelled out transparently in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B85C6D] mb-1">
                Reach Out
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C2422]">
                Contact Our Studio
              </h2>
              <p className="text-sm text-[#665A56] mt-3 leading-relaxed">
                Whether you are starting from a blank Pinterest board or have a specific aesthetic in mind, we would love to hear from you.
              </p>
            </div>

            <div className="space-y-5 text-sm text-[#4A3E3D]">
              <div className="flex items-start gap-3 p-4 bg-[#FAF6F3] rounded-2xl border border-[#EDE4DE]">
                <MapPin className="w-5 h-5 text-[#B85C6D] mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C2422]">Design Atelier</h5>
                  <p className="text-xs text-[#665A56] mt-1">742 Blossom Avenue, Suite 100, Floral Park, NY</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF6F3] rounded-2xl border border-[#EDE4DE]">
                <Phone className="w-5 h-5 text-[#B85C6D] mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C2422]">Telephone (Sample)</h5>
                  <p className="text-xs text-[#665A56] mt-1">(555) 321-BLOOM / (555) 321-2566</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF6F3] rounded-2xl border border-[#EDE4DE]">
                <Mail className="w-5 h-5 text-[#B85C6D] mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C2422]">Email (Sample)</h5>
                  <p className="text-xs text-[#665A56] mt-1">hello@bloomevents.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF6F3] rounded-2xl border border-[#EDE4DE]">
                <Clock className="w-5 h-5 text-[#B85C6D] mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C2422]">Business Hours</h5>
                  <p className="text-xs text-[#665A56] mt-1">Monday – Saturday: 9:00 AM – 7:00 PM EST<br />Sunday: On-Site Event Styling Only</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-3">
                Follow Our Floral Journey:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center border border-[#F3D5D8] hover:bg-[#B85C6D] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center border border-[#F3D5D8] hover:bg-[#B85C6D] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="w-10 h-10 rounded-full bg-[#FAF0F2] text-[#B85C6D] flex items-center justify-center border border-[#F3D5D8] hover:bg-[#B85C6D] hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-[#D5E3D8] p-8 sm:p-10 shadow-sm space-y-5">
                <div className="flex items-center gap-3 text-[#2E7D32]">
                  <CheckCircle className="w-8 h-8 text-[#2E7D32]" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1B5E20]">
                      Message Sent (Demo)!
                    </h3>
                    <p className="text-xs text-[#388E3C] mt-0.5">
                      Thank you for contacting Bloom Events.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FBFDFB] border border-[#E0EBE2] text-xs text-[#4A3E3D] space-y-2">
                  <p><strong>Name:</strong> {contactForm.name}</p>
                  <p><strong>Email:</strong> {contactForm.email}</p>
                  <p><strong>Subject:</strong> {contactForm.subject}</p>
                  <p><strong>Message:</strong> {contactForm.message}</p>
                </div>

                <p className="text-xs text-[#7A6E6A]">
                  <em>Note: This is a frontend demonstration. Your message has been prepared on the screen and is not sent to an external server.</em>
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={handleResetContact}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2C2422] bg-[#FAF6F3] border border-[#E8DED8] hover:bg-[#F2EAE4] transition-colors"
                  >
                    Send Another Message
                  </button>
                  <Link
                    to="/book"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-colors"
                  >
                    Plan Your Event
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                noValidate
                className="bg-white rounded-3xl border border-[#F0E6E1] p-8 sm:p-10 shadow-sm space-y-5"
              >
                <div className="border-b border-[#F5ECE8] pb-4">
                  <h3 className="font-display text-2xl font-bold text-[#2C2422]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#7A6E6A] mt-1">
                    Have a quick question regarding packages, dates, or custom floral arches?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        contactErrors.name ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {contactErrors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {contactErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        contactErrors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {contactErrors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {contactErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wedding Consultation Availability"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                      contactErrors.subject ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                    }`}
                  />
                  {contactErrors.subject && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {contactErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you have in mind..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                      contactErrors.message ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                    }`}
                  />
                  {contactErrors.message && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {contactErrors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] active:scale-95 transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (Demonstration)</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
