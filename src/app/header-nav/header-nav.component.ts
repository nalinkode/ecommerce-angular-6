import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
   opened = false;
   routes = [
    {linkName:'Login', url:'login'},
    {linkName:'Register', url:'register'}
  ]

  constructor() { }

  ngOnInit() {
  }

toggleSidebar(){
    this.opened = !this.opened;

  }
}