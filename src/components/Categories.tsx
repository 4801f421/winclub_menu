"use client";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  getCategoryLabel?: (category: string) => string; 
}

export default function Categories({
  categories,
  selectedCategory,
  onSelectCategory,
  getCategoryLabel,
}: CategoriesProps) {
  return (
    <div className="categories-container">
      <nav className="categories-scroll">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {getCategoryLabel ? getCategoryLabel(cat) : cat} {}
          </button>
        ))}
      </nav>
    </div>
  );
}
