import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subcategory } from './model/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  baseUrl = 'http://localhost:8080/subcategory';

  constructor(private http: HttpClient) { }

  getSubCategoryById(categoryId : number){
    return this.http.get<Subcategory>(`${this.baseUrl}/getById/${categoryId}`);
  }

  addSubCategory(data : Subcategory){
     return this.http.post<Subcategory>(`${this.baseUrl}/add`,data, {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   });
  }

  updateSubCategory(data : Subcategory){
     return this.http.post<Subcategory>(`${this.baseUrl}/add`,data, {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   });
  }

  deleteSubCategoryById(data){
    return this.http.delete<void>(`${this.baseUrl}/delete/${data.subCategoryId}`);
  }
}