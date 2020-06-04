import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm : FormGroup; 
   rememberMe: any;
   
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
   //forms controll
   this.loginForm = this.fb.group({
     email: ['', Validators.required], 
     password: ['', Validators.required],
     rememberMe:[false]
   });
  }

   onSubmit() {
    console.log('loginForm', this.loginForm.value);
    if (this.loginForm.value.email != null && this.loginForm.value.password != null ){
      console.log(this.loginForm.value.rememberMe); 
       if (this.loginForm.value.rememberMe) {
        localStorage.setItem('username', this.loginForm.value.email);
        localStorage.setItem('password', this.loginForm.value.password);
        localStorage.setItem('RememberMe', JSON.stringify(this.loginForm.value.rememberMe));
        debugger
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('RememberMe');
      }
      const md5 = new Md5();
      const pwd = md5.appendStr(this.loginForm.value.password).end();
      const dat = { 'Email': this.loginForm.value.email, 'Password': pwd };
      console.log(dat);

     }     
   }

  SetRememberMe(event: any) {
    if (event === 0) {
      this.rememberMe = false;
      localStorage.removeItem('RememberMe');
    }
  }
}