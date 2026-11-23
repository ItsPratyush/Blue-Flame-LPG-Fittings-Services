import { useEffect } from 'react';
import { X, ChevronRight, Package } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white">{product.title}</h3>
            <p className="text-sm text-gray-200 mt-1">{product.description}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Products List */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-224px)]">
          <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
            Products Available
          </h4>
          <div className="grid gap-2">
            {product.products.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-light hover:bg-industrial/5 transition-colors group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-industrial/10 text-industrial shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-charcoal group-hover:text-industrial transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }, 300);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-colors"
            >
              Enquire About These Products
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
