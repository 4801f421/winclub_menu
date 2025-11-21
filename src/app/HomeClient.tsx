"use client"; 

import { useState } from "react";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import { Product } from "@/types/product";


const categoryList = [  "all", "espresso", "latte", "Brew", "chocolate", "Herbal", "IceTea"
  ,"Shake","smoothie","mocktel","Bear","Cake","protein",
  "Appetizer","Salad","Main","pizza","burger","pasta","sandwich","breakfast"
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
  Bear : "آبجو",
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
  getCategoryLabel={(cat) => categoryNames[cat]} 
/>

      <Products products={filteredProducts} />
    </main>
  );
}
