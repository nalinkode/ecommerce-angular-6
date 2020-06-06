import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(data){
    debugger
    console.log(data);
  } 
  
  test(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');

  } 
}