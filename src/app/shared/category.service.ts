import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


 getAllCategory(){
    return this.http.get('/assets/category.json');
 }

 addCategory(data : any){
   return this.http.post('http://localhost:8080/category/add',data);
 }
}
