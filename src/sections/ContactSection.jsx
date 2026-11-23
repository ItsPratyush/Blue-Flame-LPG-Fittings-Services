import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/company';
import { MapPin, Mail, Phone, FileText } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Have an LPG Project Requirement?"
          subtitle="Share your BOQ, technical specifications, equipment list or project requirements with us. Our team would be pleased to review your requirements and discuss suitable sourcing solutions."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 reveal-left">
            <div className="bg-navy rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-flame" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Location</p>
                    <p className="text-sm text-gray-400 mt-0.5">{companyInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-flame" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-400 mt-0.5 hover:text-flame transition-colors">{companyInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-flame" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Phone</p>
                    <p className="text-sm text-gray-400 mt-0.5">{companyInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-flame" />
                  <h4 className="text-sm font-semibold">Send Us Your Requirements</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You can also directly email your BOQs, technical specifications, equipment schedules, drawings and project-specific requirements to our team.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs text-gray-500">{companyInfo.name}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
