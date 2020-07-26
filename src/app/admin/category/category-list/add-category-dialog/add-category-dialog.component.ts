import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../../shared/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../../shared/category';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  categoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  categories = [];

constructor(private fb: FormBuilder,
              private categoryService: CategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef : MatDialogRef<AddCategoryDialogComponent>
              ) { }

  ngOnInit() {
      this.createCategoryForm();
      this.editCategoryForm();
  }

  createCategoryForm(){
     this.categoryForm = this.fb.group({
     categoryId : [''],
     categoryName: ['', Validators.required],
     isActivate:['', Validators.required]
   });
  }

  editCategoryForm(){ 
    if (this.data.eCategory){
    this.categoryForm.patchValue({
      categoryId: this.data.eCategory.categoryId,
      categoryNa: this.data.eCategory.categoryName,
      isActivate: this.data.eCategory.isActivate
    });
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.categoryForm.value);
     debugger
    if(this.categoryForm.value.categoryId == ''){
    this.categoryService.addCategory(this.categoryForm.value).subscribe(resp =>{
          this.toaster.successToastr('Category added successfully .');  
    }, err => {
        this.toaster.errorToastr('Failed to add category');
      }); 
    } else {
      this.categoryService.updateCategory(this.categoryForm.value).subscribe(resp =>{
          this.toaster.successToastr('Category updated successfully .');  
    }, err => {
        this.toaster.errorToastr('Failed to update category');
      });
    }
    this.dialogRef.close();
  }

}