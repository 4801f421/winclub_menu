// src/components/Products.tsx
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  if (products.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "40px", color: "#e6c875" }}>
        هیچ محصولی در این دسته‌بندی وجود ندارد.
      </p>
    );
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
