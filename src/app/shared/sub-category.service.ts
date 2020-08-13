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


}