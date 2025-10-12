import { ReactNode } from "react";
import "./global.css"; 

export const metadata = {
  title: "پنل ادمین کافه",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
