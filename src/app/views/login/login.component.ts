import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Md5 } from 'ts-md5/dist/md5';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  UserName = '';
  Password = '';
  rememberMe: any;
  isloggedIn: boolean;
   
  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router, private toaster: ToastrManager, 
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
      this.blockedUI(true);   
      this.loginService.login(dat).subscribe((res: any) => {
              
      if (res.userName === dat.userName && res.password === dat.Password ) {
         debugger
         this.isloggedIn = true;
         Cookie.set('isLoggedIn', 'true');
         Cookie.set('userId', res.userId);
          Cookie.set('UserName', res.firstName + ' ' + res.lastName); 
          if (res.userRole) {
            Cookie.set('userRole', res.userRole);
             if (res.userRole === 'Admin') {
             this.router.navigate(['admin']);
             }
          } 
      } 
      else{
           this.toaster.infoToastr('Please enter valid Email and password.');
      }
      this.blockedUI(false);  
      }, err => {
        this.blockedUI(false);
      }); 
    }     
  }

  SetRememberMe(event: any) {
    if (event === 0) {
      this.rememberMe = false;
      localStorage.removeItem('RememberMe');
    }
  }

   blockedUI(value) {
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
       setTimeout(() =>{
         this.blockUI.stop()
       },2000);
     // this.blockUI.stop(); // Stop blocking
     }
  }
}
