import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(data){
  console.log('reg data',data);
   return this.http.post('localhost:8080/users/reg',data).pipe(map(res => res));
  } 
  
  test(){
    debugger
    return this.http.get('https://jsonplaceholder.typicode.com/posts');

  } 
}