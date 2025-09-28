"use client";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: Props) {
  return (
    <div className="products-table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام محصول</th>
            <th>دسته‌بندی</th>
            <th>توضیحات</th>
            <th>قیمت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td><img src={p.image} alt={p.name} className="product-image" /></td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td className="flex gap-2">
                <button onClick={() => onEdit(p)} className="edit-btn">
                  ✏️
                </button>
                <button onClick={() => onDelete(p._id)} className="delete-btn">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
