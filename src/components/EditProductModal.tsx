"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";

interface EditProductModalProps {
  product: Product;
  onClose: () => void;
  onSave: (updated: Product) => void;
}

export default function EditProductModal({ product, onClose, onSave }: EditProductModalProps) {
  const [form, setForm] = useState<Product>(product);

  useEffect(() => {
    setForm(product);
  }, [product]);


  const handleChange = <K extends keyof Product>(field: K, value: Product[K]) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2 className="text-lg font-bold mb-4">ویرایش محصول</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="نام محصول"
            className="form-control"
            required
          />

          <select
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="form-control"
            required
          >
            <option value="espresso">اسپرسو بار</option>
            <option value="latte">لاته بار</option>
            <option value="Brew">دمی بار</option>
            <option value="chocolate">چاکلت بار</option>
            <option value="Herbal">دمنوش</option>
            <option value="IceTea">جلبک بار</option>
            <option value="Shake">شیک</option>
            <option value="smoothie">اسموتی بار</option>
            <option value="mocktel">موکتل</option>
            <option value="Bear">آبجو</option>
            <option value="Cake">کیک و دسر</option>
            <option value="protein">پروتئین بار</option>
            <option value="Appetizer">پیش غذا</option>
            <option value="Salad">سالاد</option>
            <option value="Main">غذای اصلی</option>
            <option value="pizza">پیتزا</option>
            <option value="burger">برگر</option>
            <option value="pasta">پاستا</option>
            <option value="sandwich">ساندویچ و پنینی</option>
            <option value="breakfast">صبحانه</option>
          </select>

          <input
            type="text"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="قیمت"
            className="form-control"
            required
          />

          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="توضیحات"
            className="form-control"
            rows={2}
            required
          />

          <input
            type="text"
            value={form.image}
            onChange={(e) => handleChange("image", e.target.value)}
            placeholder="آدرس تصویر"
            className="form-control"
            required
          />


          <input
            type="text"
            value={form.details?.text || ""}
            onChange={(e) =>
              handleChange("details", { ...form.details, text: e.target.value })
            }
            placeholder="جزئیات"
            className="form-control"
          />
         

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-gray"
            >
              لغو
            </button>
            <button type="submit" className="btn btn-green">
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
