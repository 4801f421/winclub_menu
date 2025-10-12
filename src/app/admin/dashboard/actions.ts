"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function addProduct(data: {
  name: string;
  category: string;
  priceValue: number;
  description: string;
  image: string;
}) {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  const last = await db.collection("products").find().sort({ id: -1 }).limit(1).toArray();
  const newId = last.length > 0 ? last[0].id + 1 : 1;

  await db.collection("products").insertOne({
    id: newId,
    ...data,
    price: new Intl.NumberFormat("fa-IR").format(data.priceValue) + " تومان",
  });

  return { success: true };
}


export async function deleteProduct(id: string) {
  const client = await clientPromise;
  const db = client.db("cafeDB");
  await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  return { success: true };
}


export async function updateProduct(id: string, updateData: any) {
  const client = await clientPromise;
  const db = client.db("cafeDB");
  await db.collection("products").updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return { success: true };
}
