"use client"; // حتماً باید بالای فایل باشه

import { useState } from "react";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import { Product } from "@/types/product";

// دسته‌بندی‌های ثابت
const categoryList = ["all", "espresso", "latte", "mocktel", "chocolate", "Herbal", "IceTea"
  ,"Macha","espronia","Shake","smoothie","Bear"
];

const categoryNames: Record<string, string> = {
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
