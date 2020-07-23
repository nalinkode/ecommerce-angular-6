import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  
  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router,private http: HttpClientModule,private toaster: ToastrManager) { }

  ngOnInit() {
    this.createResetPasswordForm()
  }

  createResetPasswordForm(){
    this.resetPasswordForm = this.fb.group({
     newPassword: ['', Validators.required],
     confirmedPassword: ['', Validators.required]
   });
  }

}