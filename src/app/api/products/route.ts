import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// 🟢 گرفتن همه محصولات
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "خطا در دریافت محصولات" }, { status: 500 });
  }
}

// 🟠 افزودن محصول جدید
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("cafeDB");
    const result = await db.collection("products").insertOne(data);

    return NextResponse.json(
      { message: "محصول با موفقیت اضافه شد", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: "خطا در افزودن محصول" }, { status: 500 });
  }
}
