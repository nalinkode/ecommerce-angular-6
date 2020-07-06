import { Image } from './image';

export interface Product {
  productId: number;
  productName: string;
  categroy: string;
  price: number;
  imgUrl: Array<Image>;
  description: string;
 }
