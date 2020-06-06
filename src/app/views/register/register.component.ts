import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Md5 } from 'ts-md5';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RegisterService } from './viewregister/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  UserPassword: any;
 
 
  constructor(
     private fb: FormBuilder,
     private router: Router,
     private Service: RegisterService, 
     private toastr: ToastrManager 
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