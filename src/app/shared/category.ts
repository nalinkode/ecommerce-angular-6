import { Subcategory } from './subcategory';

export interface Category {
    categoryId : number;
    category : string;
    status : boolean;
    subCategory: Array<Subcategory>;
}
