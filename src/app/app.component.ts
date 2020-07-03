import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @BlockUI('root') blockUI: NgBlockUI;

  showHead: boolean = false;
  showFooter: boolean = false;
  
  constructor(private router : Router){
    this.blockUI.start();
    this.blockUI.stop();
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event['url'] == '/login') {
         this.showHead = false;
         this.showFooter = false;
        } else {
          this.showHead = true;
          this.showFooter = true; 
        }
      }
    });

    if(router.url.includes('/admin'))
   { 
      this.showFooter = false;
    }
  }
}

