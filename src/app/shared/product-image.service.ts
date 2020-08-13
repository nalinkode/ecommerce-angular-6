import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from './model/image';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
 
 
  baseUrl = 'http://localhost:8080/image';
  constructor(private http: HttpClient) { }
  
  public geImageProductById(productId : number): Observable<Image>{
    return this.http.get<Image>(`${this.baseUrl}/getImageByProductId/${productId}`);
    //return this.http.get<Image>(`${this.baseUrl}/getImageByProductId/19`);
  }

   public addProductImage(formData,productId):Observable<any>{
     return this.http.post(`${this.baseUrl}/upload/19`,formData,{ }).pipe(map(resp => resp));
  }

   public deleteProductImage(id){
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(map(resp => resp));
  }

  
  

}