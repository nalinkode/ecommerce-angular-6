import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getAllCategory(){
     return this.http.get('/assets/catgory.json').pipe(map(res => res));
  }

}
