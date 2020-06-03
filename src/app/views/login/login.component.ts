import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm : FormGroup; 
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
   //forms controll
   this.loginForm = this.fb.group({
     email: ['', Validators.required], 
     password: ['', Validators.required]
   });
  }

   onSubmit() {
     console.log('loginForm', this.loginForm.value);
   }

  // get email() {
    // return this.loginForm.get('email');
   //}
   //get password() {
   //  return this.loginForm.get('password');
   //}

}