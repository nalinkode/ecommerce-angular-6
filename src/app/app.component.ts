import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
// Wires up BlockUI instance
  @BlockUI('root') blockUI: NgBlockUI;
  
  constructor(){
    this.blockUI.start();
    /this.blockUI.stop();
  }
  
}

