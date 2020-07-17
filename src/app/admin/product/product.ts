import { Image } from './image';

export interface Product {
  productId: number;
  productName: string;
  categoryId: number;
  subCategoryId: number;
  price: number;
  imgUrl: Array<Image>;
  description: string;
 }
