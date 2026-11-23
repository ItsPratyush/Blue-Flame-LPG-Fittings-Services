import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/company';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

const marketDetails = {
  Kenya: 'Growing LPG adoption and infrastructure development',
  Uganda: 'Expanding LPG distribution and storage capacity',
  Ethiopia: 'Large-scale LPG import and distribution projects',
  Rwanda: 'Emerging LPG market with infrastructure investment',
  Tanzania: 'Developing LPG terminals and distribution networks',
};

export default function MarketsSection() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-flame rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Connecting Indian Manufacturing with East African LPG Markets"
          subtitle="Based in India's extensive manufacturing and engineering ecosystem, Blue Flame aims to support LPG infrastructure development across East Africa through competitive sourcing, coordinated procurement and international supply capabilities."
          light={true}
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {companyInfo.markets.map((market) => (
            <div
              key={market}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-flame/15 shrink-0">
                  <MapPin className="w-5 h-5 text-flame" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{market}</h3>
                  <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                    {marketDetails[market]}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Other Markets Card */}
          <div className="group bg-gradient-to-br from-flame/20 to-flame/5 border border-flame/20 rounded-2xl p-6 hover:from-flame/25 hover:to-flame/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-flame/20 shrink-0">
                <Globe className="w-5 h-5 text-flame" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Other Emerging Markets</h3>
                <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                  Other emerging LPG markets across East Africa
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-flame text-white font-semibold rounded-xl hover:bg-flame-dark transition-all duration-200 shadow-lg shadow-flame/25"
          >
            Discuss Your East African Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
