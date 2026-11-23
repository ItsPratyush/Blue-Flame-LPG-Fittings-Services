import { ChevronRight, MapPin, Wrench, ClipboardList, Factory, Globe } from 'lucide-react';
import { credibilityStrip } from '../data/company';

const iconMap = {
  Wrench,
  ClipboardList,
  Factory,
  Globe,
};

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80"
          alt="Industrial LPG facility with storage tanks and pipeline infrastructure"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/85 to-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8">
            <MapPin className="w-4 h-4 text-flame" />
            <span className="text-sm text-white/90 font-medium">
              Nashik, Maharashtra, India | Serving East African Markets
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Your Trusted Partner for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame-light to-flame">
              LPG Equipment
            </span>{' '}
            & Industrial Supply Solutions
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Delivering reliable LPG equipment, components and procurement solutions for
            engineering companies, EPC contractors and infrastructure developers across
            East Africa.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={(e) => handleScroll(e, '#products')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-flame text-white font-semibold text-base rounded-xl hover:bg-flame-dark transition-all duration-200 shadow-xl shadow-flame/25 hover:shadow-flame/40 hover:-translate-y-0.5"
            >
              Explore Our Products
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Credibility Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {credibilityStrip.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 py-5 px-4 md:px-6"
                >
                  <Icon className="w-5 h-5 text-flame shrink-0" />
                  <span className="text-sm text-white/85 font-medium leading-tight">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
