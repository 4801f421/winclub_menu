import clientPromise from "@/lib/mongodb";
import DashboardClient from "@/components/DashboardClient";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
    details: {
    مواد: string;
    زمان_تهیه: string;
    کالری: string;
  };
}

export default async function DashboardPage() {
  const client = await clientPromise;
  const db = client.db("cafeDB");

  const productsRaw = await db.collection("products").find({}).toArray();

  const products: Product[] = productsRaw.map((p: any) => ({
    _id: p._id.toString(),
    name: p.name,
    category: p.category,
    price: p.price,
    description: p.description,
    image: p.image,
    details : p.details
  }));

  return <DashboardClient initialProducts={products} />;
}
