import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.css']
})
export class CheckMailComponent implements OnInit {
  message: any;
  constructor(private router: Router) { }
  
  ngOnInit() {
    if (Cookie.get('Register')) {
      if (Cookie.get('Register') === 'true') {
        this.message = 'We just emailed you to confirm the registration';
        Cookie.set('Register', 'false');
      } else {
        this.message = 'We just emailed you with the instructions to reset your password.';
      }
    } else {
      this.message = 'We just emailed you with the instructions to reset your password.';
    }
  }
}