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
   rememberMe: any;;
  
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
      if (this.rememberMe) {
        localStorage.setItem('username', this.loginForm.value.email);
        localStorage.setItem('password', this.loginForm.value.password);
        localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
        deb
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('RememberMe');
      }


     }
           
   }

  // get email() {
    // return this.loginForm.get('email');
   //}
   //get password() {
   //  return this.loginForm.get('password');
   //}
  SetRememberMe(event: any) {
    if (event === 0) {
      this.rememberMe = false;
      localStorage.removeItem('RememberMe');
    }
  }
}