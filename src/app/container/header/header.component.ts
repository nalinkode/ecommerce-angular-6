import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   routes = [
    {linkName:'Login', url:'login'},
    {linkName:'Register', url:'register'}
  ]

  constructor() { }

  ngOnInit() {
  }

}