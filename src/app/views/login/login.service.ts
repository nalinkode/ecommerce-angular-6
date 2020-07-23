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
    return this.http.get('/assets/user.json').pipe(map(res => res));
  }


  forgetPassword(data){
    return "";
  }




}