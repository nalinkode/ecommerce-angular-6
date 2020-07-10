import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../shared/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
  categoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  isActivated : boolean;
  constructor(private fb: FormBuilder,
              private categoryService: CategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule,
              private dialogRef : MatDialogRef<CategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) { }

  ngOnInit() {
      this.createCategoryForm();
  }

  createCategoryForm(){
     this.categoryForm = this.fb.group({
     category: ['', Validators.required], 
     subCategory: ['', Validators.required],
     isActivate:[false]
   });
  }

  onChangeisActivate(event : number){
    console.log(event)
    if (event === 0) {
        this.isActivated = true;
        this.data.isActivate.setValue(this.isActivated, {
      onlySelf: true
    })
    }
  }

}