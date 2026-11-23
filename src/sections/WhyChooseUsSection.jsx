import SectionHeading from '../components/SectionHeading';
import { whyChooseUs } from '../data/company';
import * as LucideIcons from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Partner With Blue Flame?"
          subtitle="A focused approach to LPG equipment sourcing and procurement support."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {whyChooseUs.map((item, idx) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Star;
            return (
              <div
                key={idx}
                className="group p-6 md:p-8 rounded-2xl border border-border/60 bg-white hover:bg-bg-light hover:border-industrial/20 hover:shadow-lg hover:shadow-industrial/5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-industrial/10 to-flame/10 group-hover:from-industrial/15 group-hover:to-flame/15 transition-colors duration-300 mb-5">
                  <Icon className="w-6 h-6 text-industrial" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
