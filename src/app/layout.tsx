import type { Metadata } from "next";
import "./globals.css";   

export const metadata: Metadata = {
  title: "وین کلاب",
  description: "منوی وین کلاب",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
