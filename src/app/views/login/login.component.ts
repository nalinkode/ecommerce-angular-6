import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Md5 } from 'ts-md5/dist/md5';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup; 
  UserName = '';
  Password = '';
  rememberMe: any;
  isloggedIn: boolean;
   
  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router,
    private http: HttpClientModule) { }

  ngOnInit() {
    this.createForm();
    this.UserName = localStorage.getItem('username');
    this.Password = localStorage.getItem('password');
    if (JSON.parse(localStorage.getItem('RememberMe')) !== null) {
      this.rememberMe = JSON.parse(localStorage.getItem('RememberMe'));
    }
   debugger
     }

  createForm(){
   //forms controll
   this.loginForm = this.fb.group({
     userName: ['', Validators.required], 
     password: ['', Validators.required],
     rememberMe:[false]
   });
  }

   onSubmit() {
    console.log('loginForm', this.loginForm.value);
    if (this.loginForm.value.userName != null && this.loginForm.value.password != null ){

       if (this.loginForm.value.rememberMe) {
        localStorage.setItem('username', this.loginForm.value.userName);
        localStorage.setItem('password', this.loginForm.value.password);
        localStorage.setItem('RememberMe', JSON.stringify(this.loginForm.value.rememberMe));
        debugger
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('RememberMe');
        debugger
      }

      const md5 = new Md5();
      const pwd = md5.appendStr(this.loginForm.value.password).end();
      const dat = { 'userName': this.loginForm.value.userName, 'Password': pwd };
      console.log(dat);
      this.loginService.abc().subscribe(data => console.log(data));
     // this.loginService.login(dat).subscribe((res: any) => {
     // debugger
    //  console.log(res);
     
    //  });
     }     
   }

  SetRememberMe(event: any) {
    if (event === 0) {
      this.rememberMe = false;
      localStorage.removeItem('RememberMe');
    }
  }
}