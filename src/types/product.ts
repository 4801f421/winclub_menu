export interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  details?: {
    text?: string;
  };
}
