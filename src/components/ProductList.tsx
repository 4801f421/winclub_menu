"use client";

interface Product {
  id: number;
  name: string;
  category: string;
  priceValue: number;
  price: string;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductList({ products, onEdit, onDelete }: Props) {
  const getCategoryName = (categoryId: string) => {
    const categoryNames: Record<string, string> = {
      espresso: "اسپرسو بار",
      latte: "لاته بار",
      Brew: "دمی بار",
      chocolate: "چاکلت بار",
      Herbal: "دمنوش",
      IceTea: "جلبک بار",
      Shake: "شیک",
      smoothie: "اسموتی بار",
      mocktel: "موکتل",
      Bear: "آبجو",
      Cake: "کیک و دسر",
      protein: "پروتئین بار",
      Appetizer: "پیش غذا",
      Salad: "سالاد",
      Main: "غذای اصلی",
      pizza: "پیتزا",
      burger: "برگر",
      pasta: "پاستا",
      sandwich: "ساندویچ و پنینی",
      breakfast : "صبحانه"
    };
    return categoryNames[categoryId] || categoryId;
  };

  if (products.length === 0)
    return <p style={{ textAlign: "center", padding: "20px", color: "#e6c875" }}>هیچ محصولی وجود ندارد.</p>;

  return (
    <div className="products-management">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-details">
            <strong>{product.name}</strong> - <span>{getCategoryName(product.category)}</span> -{" "}
            <span>{product.price}</span>
          </div>
          <div className="product-actions">
            <button className="action-btn edit" onClick={() => onEdit(product)}>
              ✏️ ویرایش
            </button>
            <button className="action-btn delete" onClick={() => onDelete(product.id)}>
              🗑️ حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
