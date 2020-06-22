import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmedComponent } from './dialog-confirmed/dialog-confirmed.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog ) { }

  openConfirmedDialog(){
    this.dialog.open(DialogConfirmedComponent, {
      width: '390px',
      disableClose: true
    });
  }

}