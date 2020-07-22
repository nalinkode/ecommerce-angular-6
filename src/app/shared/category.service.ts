import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


 getAllCategory(){
    return this.http.get<Category>('http://localhost:8080/category/al');
 }

 addCategory(data : Category){
   return this.http.post<Category>('http://localhost:8080/category/add',data, {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   });
 }
}
