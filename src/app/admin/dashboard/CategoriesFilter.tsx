"use client";

import { useState } from "react";
import Categories from "@/components/Categories";
import ProductTable from "@/components/ProductTable";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export default function CategoriesFilter({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
  "all", "espresso", "latte", "mocktel", "chocolate", "Herbal", "IceTea"
  ,"Macha","espronia","Shake","smoothie","Bear"
  ];

  const categoryLabels: Record<string, string> = {
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

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-4">
      {/* 🔹 نوار دسته‌بندی */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        getCategoryLabel={(cat) => categoryLabels[cat]}
      />

      {/* 🔹 جدول محصولات */}
      <ProductTable products={filtered} />
    </div>
  );
}
