import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup; 
  constructor(
     private fb: FormBuilder,
     private router: Router 
  ) 
  { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm(){
   //forms controll
   this.registerForm = this.fb.group({
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     email: ['', Validators.required],
     mobileno: ['', Validators.required],
     password: ['', [Validators.required, Validators.minLength(6)]]
   });
  }


  onSubmit(){
    console.log('registerForm', this.registerForm.value);
      
      if (this.registerForm.invalid) {
            return;
      }
       
       

  }



}