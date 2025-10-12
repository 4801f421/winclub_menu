"use client";
import "@/styles/AddProductForm.css";

import { useState } from "react";

interface Product {
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  details?: {
    مواد?: string;
    زمان_تهیه?: string;
    کالری?: string;
  };
}

interface AddProductFormProps {
  onSuccess?: () => void; // برای ریفرش کردن لیست بعد از افزودن
}

export default function AddProductForm({ onSuccess }: AddProductFormProps) {
  const [form, setForm] = useState<Product>({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    details : {
      مواد : "",
      زمان_تهیه: "",
      کالری: ""
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  if (name.startsWith("details.")) {
    const key = name.split(".")[1]; // مثل "مواد"
    setForm((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        [key]: value,
      },
    }));
  } else {
    setForm((prev) => ({ ...prev, [name]: value }));
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("افزودن محصول با خطا مواجه شد");
      }

      setForm({ name: "", category: "", price: "", description: "", image: "" });

      if (onSuccess) onSuccess();
      alert("✅ محصول با موفقیت اضافه شد");
    } catch (err: any) {
      setError(err.message || "خطای ناشناخته");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-section p-4 bg-white shadow-md rounded-md">
      <h3 className="section-title mb-4 text-lg font-bold">➕ افزودن محصول جدید</h3>
<div className="p-6 max-w-7xl mx-auto bg-white rounded shadow">
  <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">

    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">نام محصول</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded p-2 focus:ring-2 focus:ring-green-400"
        required
      />
    </div>

    <div className="flex-1 w-full md:w-[150px]">
      <label className="block mb-1 font-medium">دسته‌بندی</label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border rounded p-2 focus:ring-2 focus:ring-green-400"
        required
      >
        <option value="">انتخاب کنید</option>
        <option value="espresso">اسپرسو بار</option>
        <option value="latte">لاته بار</option>
        <option value="Brew">دمی بار</option>
        <option value="chocolate">چاکلت بار</option>
        <option value="Herbal">دمنوش</option>
        <option value="IceTea">جلبک بار</option>
        <option value="Shake">شیک</option>
        <option value="smoothie">اسموتی بار</option>
        <option value="mocktel">موکتل</option>
        <option value="Bear">Beer</option>
        <option value="Cake">کیک و دسر</option>
        <option value="protein">پروتئین بار</option>

        <option value="Appetizer">پیش غذا</option>
        <option value="Salad">سالاد</option>
        <option value="Main">غذای اصلی</option>
        <option value="pizza">پیتزا</option>
        <option value="burger">برگر</option>
        <option value="pasta">پاستا</option>
        <option value="sandwich">ساندویچ و پنینی</option>
      </select>
    </div>

    <div className="flex-1 w-full md:w-[120px]">
      <label className="block mb-1 font-medium">قیمت (تومان)</label>
      <input
        type="text"
        name="price"
        value={form.price}
        onChange={handleChange}
        className="w-full border rounded p-2 focus:ring-2 focus:ring-green-400"
        required
      />
    </div>

    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">توضیحات</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="w-full border rounded p-2 focus:ring-2 focus:ring-green-400"
        rows={2}
        required
      />
    </div>

    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">آدرس تصویر (URL)</label>
      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        className="w-full border rounded p-2 focus:ring-2 focus:ring-green-400"
        required
      />
    </div>

    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">مواد</label>
     <input
  type="text"
  name="details.مواد"
  value={form.details?.مواد||""}
  onChange={handleChange}
/>
    </div>
    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">زمان تهیه</label>
     <input
  type="text"
  name="details.زمان_تهیه"
  value={form.details?.زمان_تهیه||""}
  onChange={handleChange}
/>
    </div>
    <div className="flex-1 w-full md:w-[200px]">
      <label className="block mb-1 font-medium">کالری</label>
      <input
  type="text"
  name="details.کالری"
  value={form.details?.کالری||""}
  onChange={handleChange}
/>
    </div>

    <div className="w-full md:w-auto flex justify-end">
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "در حال افزودن..." : "ثبت محصول"}
      </button>
    </div>

    {error && <p className="w-full text-red-600 mt-2">{error}</p>}
  </form>
</div>
    </div>
  );
}
