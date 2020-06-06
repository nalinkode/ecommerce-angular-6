import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Md5 } from 'ts-md5';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RegisterService } from '../register/register.service';

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
     private registerService: RegisterService, 
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
    const md5 = new Md5();
    this.registerForm.value.password = md5.appendStr     (this.registerForm.value.password).end();
    this.blockedUI(true); 
   
   this.registerService.test().subscribe((data:any) => {
     
     console.log(data)
   
   });
   this.blockedUI(false); 
   
   
  
  }

   blockedUI(value) {
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
      this.blockUI.stop(); // Stop blocking
     }
  }

}