import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserlistComponent } from '../../admin/userlist/userlist.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data){
  debugger
    return this.http.post(environment.BASE_URL + 'authenticate', data).pipe(map(res => res));
  }


  abc(){
  debugger
    return this.http.get('https://jsonplaceholder.typicode.com/posts');

  }




}