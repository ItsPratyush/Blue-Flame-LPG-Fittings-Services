import { Flame, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { companyInfo, navLinks } from '../data/company';
import { productCategories } from '../data/products';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-navy to-industrial">
                <Flame className="w-4.5 h-4.5 text-flame" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight">BLUE FLAME</span>
                <span className="block text-[9px] font-medium tracking-widest uppercase text-gray-400">LPG Fittings & Services</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {companyInfo.footerDescription}
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-flame shrink-0" />
                {companyInfo.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-flame shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-flame transition-colors">{companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-flame shrink-0" />
                {companyInfo.phone}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-flame transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Products</h4>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleNavClick(e, '#products')}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-flame transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Markets We Serve</h4>
            <ul className="space-y-2.5">
              {companyInfo.markets.map((market) => (
                <li key={market}>
                  <span className="flex items-center gap-1.5 text-sm text-gray-400">
                    <MapPin className="w-3 h-3 text-flame" />
                    {market}
                  </span>
                </li>
              ))}
              <li>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <MapPin className="w-3 h-3 text-flame" />
                  Other East African Markets
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-gray-500">{companyInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
