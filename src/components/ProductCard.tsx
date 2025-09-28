// src/components/ProductCard.tsx
import Accordion from "./Accordion";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        {product.details && <Accordion details={product.details} />}
      </div>
    </div>
  );
}
