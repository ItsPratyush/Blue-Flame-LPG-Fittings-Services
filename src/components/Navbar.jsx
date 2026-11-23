import { useState, useEffect } from 'react';
import { Menu, X, Flame, ChevronRight } from 'lucide-react';
import { navLinks } from '../data/company';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-br from-navy to-industrial'
                  : 'bg-white/15 backdrop-blur-sm'
              }`}
            >
              <Flame className="w-5 h-5 text-flame" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base md:text-lg font-bold leading-tight tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-navy' : 'text-white'
                }`}
              >
                BLUE FLAME
              </span>
              <span
                className={`text-[10px] md:text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-text-muted' : 'text-gray-300'
                }`}
              >
                LPG Fittings & Services
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-navy/8 ${
                  isScrolled
                    ? 'text-charcoal hover:text-industrial'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 bg-flame text-white text-sm font-semibold rounded-lg hover:bg-flame-dark transition-all duration-200 shadow-md shadow-flame/25 hover:shadow-lg hover:shadow-flame/30"
            >
              Request a Quote
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-navy hover:bg-navy/10'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ${
          isMobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-1 overflow-y-auto max-h-[calc(100vh-72px)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-base font-medium text-charcoal rounded-lg hover:bg-bg-light hover:text-industrial transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-flame text-white font-semibold rounded-lg hover:bg-flame-dark transition-colors"
            >
              Request a Quote
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
