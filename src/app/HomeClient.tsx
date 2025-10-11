"use client"; // حتماً باید بالای فایل باشه

import { useState } from "react";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import { Product } from "@/types/product";

// دسته‌بندی‌های ثابت
const categoryList = [  "all", "espresso", "latte", "Brew", "chocolate", "Herbal", "IceTea"
  ,"Shake","smoothie","mocktel","Bear","Cake","protein",
  "Appetizer","Salad","Main","pizza","burger","pasta","sandwich"
];

const categoryNames: Record<string, string> = {
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


interface HomeClientProps {
  allProducts: Product[];
}

export default function HomeClient({ allProducts }: HomeClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <main>
      <Banner />
      <Categories
  categories={categoryList}
  selectedCategory={selectedCategory}
  onSelectCategory={setSelectedCategory}
  getCategoryLabel={(cat) => categoryNames[cat]} // <-- اضافه شد
/>

      <Products products={filteredProducts} />
    </main>
  );
}
