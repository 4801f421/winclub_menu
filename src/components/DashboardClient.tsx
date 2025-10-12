"use client";

import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";
import Categories from "./Categories";
import EditProductModal from "./EditProductModal";
import Banner from "./Banner";

import { Product } from "@/types/product";

interface DashboardClientProps {
  initialProducts: Product[];
}


const safeProduct = (p: Product): Product => ({
  ...p,
  _id: p._id!,
  details: p.details || { مواد: "", زمان_تهیه: "", کالری: "" },
});

export default function DashboardClient({ initialProducts }: DashboardClientProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts.map(safeProduct));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const categories = [
    "all", "espresso", "latte", "Brew", "chocolate", "Herbal", "IceTea",
    "Shake", "smoothie", "mocktel", "Bear", "Cake", "protein",
    "Appetizer", "Salad", "Main", "pizza", "burger", "pasta", "sandwich"
  ];

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      all: "همه محصولات",
      espresso: "اسپرسو بار",
      latte: "لاته بار",
      Brew: "دمی بار",
      chocolate: "چاکلت بار",
      Herbal: "دمنوش",
      IceTea: "جلبک بار",
      Shake: "شیک",
      smoothie: "اسموتی بار",
      mocktel: "موکتل",
      Bear: "Beer",
      Cake: "کیک و دسر",
      protein: "پروتئین بار",
      Appetizer: "پیش غذا",
      Salad: "سالاد",
      Main: "غذای اصلی",
      pizza: "پیتزا",
      burger: "برگر",
      pasta: "پاستا",
      sandwich: "ساندویچ و پنینی"
    };
    return labels[cat] || cat;
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleEdit = async (updated: Product) => {
    await fetch(`/api/products/${updated._id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: { "Content-Type": "application/json" },
    });
    setProducts((prev) =>
      prev.map((p) => (p._id === updated._id ? safeProduct(updated) : p))
    );
    setEditingProduct(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("آیا مطمئن هستید می‌خواهید این محصول را حذف کنید؟")) return;

    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } else {
      alert("❌ حذف محصول انجام نشد!");
    }
  };

  const handleRefresh = async () => {
    const res = await fetch("/api/products");
    if (res.ok) {
      const updated: Product[] = await res.json();
      setProducts(updated.map(safeProduct));
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Banner />

      <AddProductForm onSuccess={handleRefresh} />

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        getCategoryLabel={getCategoryLabel}
      />

      <ProductTable
        products={filteredProducts.map(safeProduct)}
        onEdit={(product: Product) => setEditingProduct(safeProduct(product))}
        onDelete={handleDelete}
      />

      {editingProduct && (
        <EditProductModal
          product={safeProduct(editingProduct)}
          onClose={() => setEditingProduct(null)}
          onSave={(updated) => {
            // wrapper sync برای onSave
            (async () => {
              await handleEdit(safeProduct(updated as Product));
            })();
          }}
        />
      )}
    </div>
  );
}
