export const dynamic = "force-dynamic";


import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// 🟢 ویرایش محصول
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // 👈 حتما await
    const data = await req.json();

    const client = await clientPromise;
    const db = client.db("cafeDB");

    const { _id, ...updateData } = data;

    await db.collection("products").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    return NextResponse.json({ message: "محصول با موفقیت ویرایش شد" });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "خطا در ویرایش محصول" },
      { status: 500 }
    );
  }
}

// 🔴 حذف محصول
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // 👈 باز هم await
    const client = await clientPromise;
    const db = client.db("cafeDB");

    await db.collection("products").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: "محصول حذف شد" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "خطا در حذف محصول" },
      { status: 500 }
    );
  }
}
