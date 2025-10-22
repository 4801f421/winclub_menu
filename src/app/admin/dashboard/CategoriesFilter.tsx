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
  "all", "espresso", "latte", "Brew", "chocolate", "Herbal", "IceTea"
  ,"Shake","smoothie","mocktel","Bear","Cake","protein",
  "Appetizer","Salad","Main","pizza","burger","pasta","sandwich","breakfast"
  ];

  const categoryLabels: Record<string, string> = {
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
  pizza : "پیتزا",
  burger : "برگر",
  pasta : "پاستا",
  sandwich : "ساندویچ و پنینی",
  breakfast : "صبحانه"
  };

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-4">

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        getCategoryLabel={(cat) => categoryLabels[cat]}
      />


    </div>
  );
}
