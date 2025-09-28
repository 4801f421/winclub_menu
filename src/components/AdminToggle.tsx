// AdminToggle.tsx
"use client";

interface Props {
  onToggle: () => void;
  isVisible: boolean;
}

export default function AdminToggle({ onToggle, isVisible }: Props) {
  return (
    <div className="toggle-admin">
      {!isVisible && (
        <button
          className="toggle-admin-btn"
          onClick={onToggle}
        >
          📋 نمایش پنل مدیریت محصولات
        </button>
      )}
    </div>
  );
}
