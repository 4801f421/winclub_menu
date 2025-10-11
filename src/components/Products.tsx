"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  if (!products || products.length === 0) {
    return <p>هیچ محصولی وجود ندارد.</p>;
  }

  return (
    <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
