import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productCategories } from '../data/products';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Product Portfolio"
          subtitle="Comprehensive range of LPG equipment, components and industrial supply solutions across seven major categories."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {productCategories.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProducts={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
