// components/features.tsx
"use client";
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ProductCard } from './product-card';
import { products } from '@/data/products';

export default function Features() {
  const [showAll, setShowAll] = useState(false);
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          {featuredProducts.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center text-primary hover:underline"
            >
              {showAll ? "Show Less" : "View All"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(showAll ? featuredProducts : featuredProducts.slice(0, 4)).map((product) => (
            <ProductCard 
              key={product.id}
              product={{
                ...product,
                images: product.images || [product.image!]
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}