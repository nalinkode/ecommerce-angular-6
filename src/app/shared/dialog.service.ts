import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedDialogComponent } from '../confirmed-dialog/confirmed-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog ) { }

  openConfirmedDialog(msg){
    return this.dialog.open(ConfirmedDialogComponent, {
      width: '30px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top : "110px"},
      data: {
        message : msg
      }
    });
  }

}