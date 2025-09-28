export interface ProductDetails {
  مواد?: string;
  زمان_تهیه?: string;
  کالری?: string;
}

export interface Product {
  _id?: string;
  id?: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  details?: ProductDetails;
}
