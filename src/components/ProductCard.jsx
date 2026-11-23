import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function ProductCard({ product, onViewProducts }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const Icon = LucideIcons[product.icon] || LucideIcons.Package;

  return (
    <div className="group bg-white rounded-2xl shadow-md shadow-navy/5 border border-border/60 overflow-hidden hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {!imgLoaded && <div className="absolute inset-0 img-loading" />}
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-navy group-hover:text-industrial transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 text-xs text-text-muted">
          {product.products.length} products available
        </div>
        <button
          onClick={() => onViewProducts(product)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-industrial hover:text-flame transition-colors group/btn"
        >
          View Products
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
