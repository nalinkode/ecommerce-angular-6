import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../product/product';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productList: Product[]=[]

  constructor(private http: HttpClient) { }

  public getAllProduct():Observable<Product[]>{
    return this.http.get('/assets/product.json').pipe(map(res => res));
  }


  public getProductById(productId : number): Observable<Product>{
    return this.http.get('/assets/productbyid.json');
  }
  
  public addProduct(product:Product){
    console.log(product)
    debugger
  }

  public addProductImage(product,productId){
    console.log(product)
    debugger
  }


  public editProduct(product:Product){
    debugger
  }
    
  public deleteProduct(product:Product){
    console.log('The product to delete .....');
    console.log(product);
  }
 
  
    
}
