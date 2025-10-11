"use client";

import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";
import Categories from "./Categories";
import EditProductModal from "./EditProductModal";
import Banner from "./Banner";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

interface DashboardClientProps {
  initialProducts: Product[];
}

export default function DashboardClient({ initialProducts }: DashboardClientProps) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const categories = [  "all", "espresso", "latte", "Brew", "chocolate", "Herbal", "IceTea"
  ,"Shake","smoothie","mocktel","Bear","Cake","protein",
  "Appetizer","Salad","Main","pizza","burger","pasta","sandwich"];
  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
 all: "همه محصولات",
  espresso: "اسپرسو بار",
  latte: "لاته بار",
  Brew: "دمی بار",
  chocolate: "چاکلت بار",
  Herbal: "دمنوش",
  IceTea: "جلبک بار",
  Shake : "شیک",
  smoothie : "اسموتی بار",
  mocktel : "موکتل",
  Bear : "Beer",
  Cake : "کیک و دسر", 
  protein : "پروتئین بار",
  Appetizer : "پیش غذا",
  Salad : "سالاد",
  Main : "غذای اصلی",
  pizza : "پینزا",
  burger : "برگر",
  pasta : "پاستا",
  sandwich : "ساندویچ و پنینی"
    };
    return labels[cat] || cat;
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // 🔹 افزودن محصول به DB
  const handleAdd = async (newProduct: Omit<Product, "_id">) => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    });
    const created = await res.json();
    setProducts((prev) => [...prev, created]);
  };

  // 🔹 ویرایش محصول
  const handleEdit = async (updated: Product) => {
    await fetch(`/api/products/${updated._id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: { "Content-Type": "application/json" },
    });
    setProducts((prev) =>
      prev.map((p) => (p._id === updated._id ? updated : p))
    );
    setEditingProduct(null);
  };

  const handleDelete = async (id: string) => {
  if (!confirm("آیا مطمئن هستید می‌خواهید این محصول را حذف کنید؟")) return;

  const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
  if (res.ok) {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  } else {
    alert("حذف محصول انجام نشد!");
  }
};


  return (
    <div className="p-6 space-y-6">
      <Banner/>
      {/* فرم افزودن محصول */}
      <AddProductForm nextId={products.length + 1} onAdd={handleAdd} />

      {/* نوار دسته‌بندی */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        getCategoryLabel={getCategoryLabel}
      />

      {/* جدول محصولات */}
      <ProductTable products={filteredProducts} onEdit={setEditingProduct} onDelete={handleDelete}/>

      {/* مدال ویرایش */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEdit}
        />
      )}
    </div>
  );
}
