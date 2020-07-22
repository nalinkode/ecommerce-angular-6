import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


 getAllCategory(){
    return this.http.get('/assets/category.json');
 }

 addCategory(data : Category){
   return this.http.post('http://localhost:8080/category/add',data);
 }
}
