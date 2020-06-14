import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   opened = false;
  constructor() { }

  ngOnInit() {
    
  }

  toggleSidebar(){
    this.opened = !this.opened;

  }
}