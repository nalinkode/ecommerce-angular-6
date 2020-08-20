import { Component, OnInit } from '@angular/core';
import { fafaceboo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dateYear: number = new Date().getFullYear();
  constructor() { }
   
  ngOnInit() {
  }

}