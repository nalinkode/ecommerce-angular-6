import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  
  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router,private http: HttpClientModule) { }

  ngOnInit() {
    this.createForgotPasswordForm()
  }

  createForgotPasswordForm(){
    this.forgotPasswordForm = this.fb.group({
     userName: ['', Validators.required]
   });
  }
  
}