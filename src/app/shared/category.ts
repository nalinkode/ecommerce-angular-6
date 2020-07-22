import { Subcategory } from './subcategory';

export interface Category {
    categoryId : number;
    categoryName : string;
    isActivate : boolean;
    subCategory: Array<Subcategory>;
}
