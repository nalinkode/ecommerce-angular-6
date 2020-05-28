import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup; 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm(){
   //forms controll
   this.registerForm = this.fb.group({
     fname: ['', Validators.required],
     email: ['', Validators.required],
     mobileno: ['', Validators.required], 
     password: ['', Validators.required],
     cpassword: ['', Validators.required]
   });
  }

  onSubmit(){
    console.log('registerForm', this.registerForm.value);
  }



}