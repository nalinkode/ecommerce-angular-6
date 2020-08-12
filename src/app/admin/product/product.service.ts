import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../product/product';
import {Observable} from 'rxjs';
import { Image } from './image';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseUrl = 'http://localhost:8080/image';
  productList: Product[]=[]

  constructor(private http: HttpClient) { }

  public getAllProduct():Observable<Product[]>{
    return this.http.get('/assets/product.json').pipe(map(res => res));
  }


  public geImageProductById(productId : number): Observable<Image>{
    return this.http.get<Image>(`${this.baseUrl}/getImageByProductId/${productId}`);
  }
  
  public addProduct(product:Product):Observable<any>{
    console.log(product)
    debugger
    return
  }

  public addProductImage(formData,productId):Observable<any>{
    return ;
  }


  public editProduct(product:Product){
    debugger
  }
    
  public deleteProduct(product:Product){
    console.log('The product to delete .....');
    console.log(product);
  }


  public deleteProductImage(id){
    
  }  
}
