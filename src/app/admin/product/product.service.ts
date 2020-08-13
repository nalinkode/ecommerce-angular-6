import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../product/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/product';

  productList: Product[]=[]

  constructor(private http: HttpClient) { }

  public getAllProduct():Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/all`).pipe(map(res => res));
  }
  
  public addProduct(product:Product):Observable<any>{
    console.log(product)
    debugger
    return
  }

  public editProduct(product:Product){
    debugger
  }
    
  public deleteProduct(product:Product){
    console.log('The product to delete .....');
    console.log(product);
  }


 
    
}
