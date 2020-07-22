import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient) { }

 baseUrl = 'http://localhost:8080/category';

 getAllCategory(){
    return this.http.get<Category>('http://localhost:8080/category/all');
 }

 addCategory(data : Category){
   return this.http.post<Category>('http://localhost:8080/category/add',data, {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   });
 }

 updateCategory(data : Category){
    return this.http.put<Category>(`${this.baseUrl}/update`,data, {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   });
 }

 deleteCategory(data : Category){
   return this.http.delete<void>(`${this.baseUrl}/delete/${data.categoryId}`);
 }

}

