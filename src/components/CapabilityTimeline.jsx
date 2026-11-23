import * as LucideIcons from 'lucide-react';
import { capabilities } from '../data/company';

export default function CapabilityTimeline() {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = LucideIcons[cap.icon] || LucideIcons.Circle;
          return (
            <div key={idx} className="relative group">
              {/* Connector line (not on last) */}
              {idx < capabilities.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] right-0 h-[2px] bg-gradient-to-r from-industrial/40 to-industrial/10 z-0" />
              )}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-industrial text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-industrial/20">
                  {cap.step}
                </div>
                <h4 className="text-sm font-bold text-navy leading-tight mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {capabilities.map((cap, idx) => {
          const Icon = LucideIcons[cap.icon] || LucideIcons.Circle;
          return (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-industrial text-white font-bold text-sm shrink-0 shadow-md">
                  {cap.step}
                </div>
                {idx < capabilities.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-industrial/40 to-industrial/10 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h4 className="text-base font-bold text-navy">{cap.title}</h4>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">{cap.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
