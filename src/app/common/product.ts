export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  discounted: boolean;
  discount: number;
  image: string;
}
