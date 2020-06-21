import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productList: Product[]=[]

  constructor(private http: HttpClient) { }

  public getAllProduct(){
    debugger
    return this.http.get('/assets/product.json');
  }
  
  public addProduct(product:Product){
    debugger
  }

  public editProduct(product:Product){
    debugger
  }
    
  public deleteProduct(){
    debugger  
  }
 
  
    
}