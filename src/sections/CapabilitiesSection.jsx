import SectionHeading from '../components/SectionHeading';
import CapabilityTimeline from '../components/CapabilityTimeline';
import { customerDocuments } from '../data/company';
import { FileText, CheckCircle } from 'lucide-react';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="More Than Product Supply. A Complete Sourcing Partner."
          subtitle="We provide procurement and sourcing support throughout the equipment procurement process."
        />

        <div className="mt-12 reveal">
          <CapabilityTimeline />
        </div>

        {/* Customer Documents */}
        <div className="mt-20 reveal">
          <div className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-md shadow-navy/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-industrial/10">
                <FileText className="w-5 h-5 text-industrial" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">Share Your Project Requirements</h3>
                <p className="text-sm text-text-muted">Customers can approach us with any of the following</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {customerDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-bg-light">
                  <CheckCircle className="w-4 h-4 text-industrial shrink-0" />
                  <span className="text-sm font-medium text-charcoal">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
