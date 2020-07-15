import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../../shared/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subcategory-dialog',
  templateUrl: './add-subcategory-dialog.component.html',
  styleUrls: ['./add-subcategory-dialog.component.css']
})
export class AddSubcategoryDialogComponent implements OnInit {
  
  subCategoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef : MatDialogRef<AddSubcategoryDialogComponent>) { }

  ngOnInit() {
     this.createSubCategoryForm();
  }

  createSubCategoryForm(){
     this.subCategoryForm = this.fb.group({
     category: ['', Validators.required], 
     isActivate:['', Validators.required]
   });
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    //console.log(this.categoryForm.value);
    this.toaster.successToastr('Sub category added successfully .');  
    this.dialogRef.close();
  }


}
