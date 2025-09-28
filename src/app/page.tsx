import clientPromise from "@/lib/mongodb";
import { Product } from "@/types/product";
import HomeClient from "./HomeClient";

async function getProducts(): Promise<Product[]> {
  const client = await clientPromise;
  const db = client.db("cafeDB");
  const products: Product[] = await db.collection("products").find({}).toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
}

export default async function Home() {
  const allProducts = await getProducts();
  return <HomeClient allProducts={allProducts} />;
}
