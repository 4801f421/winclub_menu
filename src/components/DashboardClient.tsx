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

  const categories = [  "all", "espresso", "latte", "mocktel", "chocolate", "Herbal", "IceTea"
  ,"Macha","espronia","Shake","smoothie","Bear"];
  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
  all: "همه محصولات",
        espresso: "اسپرسو بار",
  latte: "لاته بار",
  mocktel: "موکتل بار",
  chocolate: "چاکلت بار",
  Herbal: "دمنوش",
  IceTea: "آیس تی",
  Macha : "ماچا",
  espronia : "اسپرونیا",
  Shake : "شیک",
  smoothie : "اسموتی",
  Bear : "آبجو"
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
