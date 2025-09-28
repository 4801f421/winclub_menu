import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ await
  const client = await clientPromise;
  const db = client.db("cafeDB");
  const data = await req.json();

  const { _id, ...updateData } = data; // حذف _id

  await db.collection("products").updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ await
  const client = await clientPromise;
  const db = client.db("cafeDB");

  if (!id)
    return NextResponse.json({ error: "ID is required" }, { status: 400 });

  await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({ success: true });
}
