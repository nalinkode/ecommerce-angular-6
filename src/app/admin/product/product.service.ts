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
  
  public addProduct(data):Observable<any>{
    console.log(data)
    debugger
    return
  }

  public editProduct(product:Product){
    debugger
  }
    
  public deleteProduct(productId){
    return this.http.delete<void>(`${this.baseUrl}/delete/${productId}`).pipe(map(resp => resp));
  }


 
    
}
