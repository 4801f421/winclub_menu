export interface Product {
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
