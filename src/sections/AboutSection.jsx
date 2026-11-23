import SectionHeading from '../components/SectionHeading';
import { companyInfo, targetCustomers } from '../data/company';
import { Users, Building2, Handshake, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Supporting the LPG Infrastructure Industry"
          subtitle="A specialized trading and sourcing company focused on LPG equipment and industrial gas-handling solutions."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="reveal-left">
            <p className="text-base md:text-lg text-charcoal-light leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="mt-4 text-base md:text-lg text-charcoal-light leading-relaxed">
              We serve as a single-window sourcing and procurement partner, enabling our customers to consolidate their equipment requirements through one reliable point of contact.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                We work with
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {targetCustomers.map((customer, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-industrial shrink-0" />
                    <span className="text-sm font-medium text-charcoal">{customer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-xl bg-bg-light">
                <Users className="w-6 h-6 text-industrial mb-2" />
                <span className="text-xs font-semibold text-navy text-center">B2B Focus</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-bg-light">
                <Building2 className="w-6 h-6 text-industrial mb-2" />
                <span className="text-xs font-semibold text-navy text-center">Multi-Category</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-bg-light">
                <Handshake className="w-6 h-6 text-industrial mb-2" />
                <span className="text-xs font-semibold text-navy text-center">Single Window</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/15">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Industrial LPG pipeline and valve equipment at a gas processing facility"
                className="w-full h-80 md:h-[28rem] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
                <p className="text-white text-sm font-medium">Based in Nashik, Maharashtra, India</p>
                <p className="text-gray-300 text-xs mt-0.5">Serving international LPG markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
