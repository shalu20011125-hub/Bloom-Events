import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventVenue: string;
  decorationPackage: string;
  estimatedBudget: string;
  additionalRequirements: string;
}

interface FormErrors {
  [key: string]: string;
}

export const BookEvent: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding Decoration',
    eventDate: '',
    eventVenue: '',
    decorationPackage: 'Premium Package',
    estimatedBudget: '$2,500 - $5,000',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  useEffect(() => {
    const pkg = searchParams.get('package');
    const service = searchParams.get('service');

    if (pkg) {
      setFormData((prev) => ({ ...prev, decorationPackage: pkg }));
    }
    if (service) {
      let mappedType = 'Wedding Decoration';
      if (service.toLowerCase().includes('birthday')) mappedType = 'Birthday Party Decoration';
      else if (service.toLowerCase().includes('engagement')) mappedType = 'Engagement Decoration';
      else if (service.toLowerCase().includes('baby')) mappedType = 'Baby Shower Decoration';
      else if (service.toLowerCase().includes('corporate')) mappedType = 'Corporate Event Decoration';
      setFormData((prev) => ({ ...prev, eventType: mappedType }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select a preferred event date.';
    }

    if (!formData.eventVenue.trim()) {
      newErrors.eventVenue = 'Please indicate the venue or city location.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: 'Wedding Decoration',
      eventDate: '',
      eventVenue: '',
      decorationPackage: 'Premium Package',
      estimatedBudget: '$2,500 - $5,000',
      additionalRequirements: '',
    });
    setErrors({});
  };

  return (
    <div className="py-12 lg:py-20 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F2] text-[#B85C6D] border border-[#F3D5D8] text-xs font-semibold uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Event Enquiry Form</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#2C2422]">
          Book Your Event Decoration
        </h1>
        <p className="text-base sm:text-lg text-[#5A4F4C] leading-relaxed">
          Share your celebration details with our floral design team. We will review your dates, preferred color palette, and venue aesthetics to curate a tailored design plan.
        </p>

        {/* Clear Demonstration Note */}
        <div className="bg-[#FAF6F3] border border-[#E8DED8] rounded-xl p-3.5 text-xs text-[#7A6E6A] flex items-center justify-center gap-2 max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-[#A67C52] shrink-0" />
          <span>
            <strong>Demonstration Notice:</strong> Submitting this form demonstrates enquiry preparation only and does not create an automatic permanent booking or charge your card.
          </span>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form or Success */}
          <div className="lg:col-span-8">
            {submittedData ? (
              /* Success State */
              <div className="bg-white rounded-3xl border border-[#D5E3D8] p-8 sm:p-10 shadow-md space-y-6">
                <div className="flex items-center gap-3 text-[#2E7D32]">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-7 h-7 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1B5E20]">
                      Thank You! Your Enquiry Has Been Prepared
                    </h3>
                    <p className="text-xs text-[#388E3C] mt-0.5">
                      Please contact us directly to confirm your booking.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FBFDFB] border border-[#E0EBE2] rounded-2xl p-6 space-y-3 text-sm text-[#2C2422]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#1B5E20] pb-2 border-b border-[#E0EBE2]">
                    Prepared Enquiry Summary
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-xs">
                    <div>
                      <span className="text-[#665A56]">Client Name:</span>
                      <p className="font-semibold text-sm">{submittedData.fullName}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Event Type:</span>
                      <p className="font-semibold text-sm">{submittedData.eventType}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Preferred Date:</span>
                      <p className="font-semibold text-sm">{submittedData.eventDate}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Venue / Location:</span>
                      <p className="font-semibold text-sm">{submittedData.eventVenue}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Decoration Package:</span>
                      <p className="font-semibold text-sm text-[#B85C6D]">{submittedData.decorationPackage}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Estimated Budget:</span>
                      <p className="font-semibold text-sm text-[#8C6D1F]">{submittedData.estimatedBudget}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Contact Phone:</span>
                      <p className="font-semibold text-sm">{submittedData.phone}</p>
                    </div>
                    <div>
                      <span className="text-[#665A56]">Email Address:</span>
                      <p className="font-semibold text-sm">{submittedData.email}</p>
                    </div>
                  </div>

                  {submittedData.additionalRequirements && (
                    <div className="pt-3 border-t border-[#E0EBE2] text-xs">
                      <span className="text-[#665A56]">Additional Notes:</span>
                      <p className="mt-1 italic text-[#4A3E3D]">"{submittedData.additionalRequirements}"</p>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#F4E3BD] text-xs text-[#8C6D1F] space-y-1">
                  <p className="font-semibold">Next Steps for Demonstration:</p>
                  <p>
                    In an active business scenario, our senior floral stylist would call you within 24 hours to schedule a complimentary floral mock-up session and finalize your contract.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2C2422] bg-[#FAF6F3] border border-[#E8DED8] hover:bg-[#F2EAE4] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>

                  <Link
                    to="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] transition-colors"
                  >
                    <span>Browse Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              /* Enquiry Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl border border-[#F0E6E1] p-8 sm:p-10 shadow-sm space-y-6"
              >
                <div className="border-b border-[#F5ECE8] pb-4">
                  <h3 className="font-display text-2xl font-bold text-[#2C2422]">
                    Event Details & Consultation
                  </h3>
                  <p className="text-xs text-[#7A6E6A] mt-1">
                    Please complete all required fields marked with *
                  </p>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DED8] text-sm text-[#2C2422] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#F3D5D8]"
                    >
                      <option value="Wedding Decoration">Wedding Decoration</option>
                      <option value="Birthday Party Decoration">Birthday Party Decoration</option>
                      <option value="Engagement Decoration">Engagement Decoration</option>
                      <option value="Baby Shower Decoration">Baby Shower Decoration</option>
                      <option value="Corporate Event Decoration">Corporate Event Decoration</option>
                      <option value="Other Bespoke Celebration">Other Bespoke Celebration</option>
                    </select>
                  </div>
                </div>

                {/* Date & Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Preferred Event Date *
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        errors.eventDate ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {errors.eventDate && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.eventDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Event Venue / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. The Glasshouse, Manhattan"
                      value={formData.eventVenue}
                      onChange={(e) => setFormData({ ...formData, eventVenue: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 ${
                        errors.eventVenue ? 'border-red-400 focus:ring-red-200' : 'border-[#E8DED8] focus:ring-[#F3D5D8]'
                      }`}
                    />
                    {errors.eventVenue && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.eventVenue}
                      </p>
                    )}
                  </div>
                </div>

                {/* Package & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Decoration Package
                    </label>
                    <select
                      value={formData.decorationPackage}
                      onChange={(e) => setFormData({ ...formData, decorationPackage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DED8] text-sm text-[#2C2422] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#F3D5D8]"
                    >
                      <option value="Basic Package">Basic Package ($799 sample)</option>
                      <option value="Premium Package">Premium Package ($1,899 sample)</option>
                      <option value="Luxury Package">Luxury Package ($3,499 sample)</option>
                      <option value="Bespoke Custom Package">Bespoke Custom Floral Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DED8] text-sm text-[#2C2422] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#F3D5D8]"
                    >
                      <option value="Under $1,500">Under $1,500</option>
                      <option value="$1,500 - $3,000">$1,500 – $3,000</option>
                      <option value="$3,000 - $6,000">$3,000 – $6,000</option>
                      <option value="$6,000 - $12,000">$6,000 – $12,000</option>
                      <option value="$12,000+">$12,000+ (Full Venue Staging)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2422] mb-1.5">
                    Additional Requirements & Floral Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your favorite flowers, theme colors, guest count, or any special installations you envision..."
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DED8] text-sm text-[#2C2422] placeholder:text-[#AAA09C] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#F3D5D8]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B85C6D] hover:bg-[#A34E5E] active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-[#827470] text-center">
                  * No credit card required. We will respond with sample palette swatches and availability.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Support & Process */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#FAF6F3] rounded-3xl border border-[#EDE4DE] p-7 space-y-5">
              <h4 className="font-display text-xl font-bold text-[#2C2422]">
                Our Booking Process
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[#B85C6D] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2C2422]">Consultation & Moodboard</h5>
                    <p className="text-[#665A56] mt-0.5">We discuss your style, color palette, and preferred botanical species.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[#B85C6D] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2C2422]">Site Walkthrough & Proposal</h5>
                    <p className="text-[#665A56] mt-0.5">We review venue dimensions, lighting conditions, and structural points.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[#B85C6D] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2C2422]">Fresh Sourcing & Build</h5>
                    <p className="text-[#665A56] mt-0.5">Flowers are cut 48 hours prior for maximum radiance on event day.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-[#B85C6D] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    4
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2C2422]">Flawless On-Site Execution</h5>
                    <p className="text-[#665A56] mt-0.5">Our artisans install, candle-light, and teardown quietly after your party.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl border border-[#F0E6E1] p-7 space-y-4 shadow-xs">
              <h4 className="font-display text-xl font-bold text-[#2C2422]">
                Need Immediate Assistance?
              </h4>
              <p className="text-xs text-[#665A56] leading-relaxed">
                If your event is within the next 14 days, please call our studio team directly for urgent calendar verification.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#4A3E3D]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B85C6D] shrink-0" />
                  <span className="font-semibold">(555) 321-BLOOM (Sample)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B85C6D] shrink-0" />
                  <span>concierge@bloomevents.com (Sample)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#B85C6D] shrink-0 mt-0.5" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM EST</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
