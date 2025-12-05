export const dynamic = "force-static"; 
export const revalidate = 10; 

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import clientPromise from "@/lib/mongodb";

// --------------------------
//        GET (Cached)
// --------------------------
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cafeDB");

    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}

// --------------------------
//       POST (Mutate)
// --------------------------
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const client = await clientPromise;
    const db = client.db("cafeDB");

    const result = await db.collection("products").insertOne(data);


    revalidatePath("/api/products");

    return NextResponse.json(
      { message: "محصول با موفقیت اضافه شد", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: "خطا در افزودن محصول" },
      { status: 500 }
    );
  }
}