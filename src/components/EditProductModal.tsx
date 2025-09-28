"use client";

import { useState, useEffect } from "react";

interface Product {
  _id?: string;
  id?: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  details: {
    مواد: string;
    زمان_تهیه: string;
    کالری: string;
  };
}

interface Props {
  product: Product | null;           // محصول انتخاب‌شده
  onClose: () => void;               // بستن مودال
  onSave: (updated: Product) => void; // ذخیره تغییرات
}

export default function EditProductModal({ product, onClose, onSave }: Props) {
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    setForm(product);
  }, [product]);

  if (!form) return null;

  const handleChange = (key: keyof Product, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="text-lg font-bold mb-4">ویرایش محصول</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="form-control"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="نام محصول"
          />
          <input
            className="form-control"
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
            placeholder="دسته‌بندی"
          />
          <input
            className="form-control"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="قیمت"
          />
          <textarea
            className="form-control"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="توضیحات"
          />
          <input
            className="form-control"
            value={form.image}
            onChange={(e) => handleChange("image", e.target.value)}
            placeholder="لینک تصویر"
          />

          <input
            className="form-control"
            value={form.details?.مواد || ''}
            onChange={(e) => handleChange("details", { ...form.details, مواد: e.target.value })}
            placeholder="مواد"
          />
          <input
            className="form-control"
            value={form.details?.زمان_تهیه || ''}
            onChange={(e) => handleChange("details", { ...form.details, زمان_تهیه: e.target.value })}
            placeholder="زمان تهیه"
          />
          <input
            className="form-control"
            value={form.details?.کالری || ''}
            onChange={(e) => handleChange("details", { ...form.details, کالری: e.target.value })}
            placeholder="کالری"
          />

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="admin-btn bg-gray-400">
              ❌ بستن
            </button>
            <button type="submit" className="admin-btn bg-indigo-600">
              💾 ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
