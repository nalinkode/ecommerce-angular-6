import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../../shared/category.service';
import { SubCategoryService } from '../../../../shared/sub-category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../../shared/model/category';

@Component({
  selector: 'app-add-subcategory-dialog',
  templateUrl: './add-subcategory-dialog.component.html',
  styleUrls: ['./add-subcategory-dialog.component.css']
})
export class AddSubcategoryDialogComponent implements OnInit {
  
  subCategoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  categories = [];

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private subCategoryService : SubCategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef : MatDialogRef<AddSubcategoryDialogComponent>) { 
              }

  ngOnInit() {
     this.getAllCatgory();
     this.createSubCategoryForm();
     this.editSubCategoryForm();
  }

  createSubCategoryForm(){
     this.subCategoryForm = this.fb.group({
     subCategoryId: [''],  
     category: ['', Validators.required],
     subCategory: ['', Validators.required], 
     isActivate: ['', Validators.required]
   });
  }

  editSubCategoryForm(){
    if(this.data.esubCategory){
      this.subCategoryForm.patchValue({
      category: this.data.esubCategory.categoryId,
      subCategoryId: this.data.esubCategory.subCategoryId, 
      subCategory: this.data.esubCategory.subCategoryName,
      isActivate: this.data.esubCategory.isActivate
    });
    }
  }

  getAllCatgory(){
    this.categoryService.getAllCategory().subscribe(resp => {
        this.categories = resp as Category[]; 
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.subCategoryForm.value);
    console.log(this.data.esubCategory.subCategoryId);
    if (this.subCategoryForm.value.subCategoryId == ''){
    this.subCategoryService.addSubCategory(this.subCategoryForm.value).subscribe(resp =>{
          this.toaster.successToastr('Sub category added successfully .');  
    }, err => {
        this.toaster.errorToastr('Failed to add sub category');
      }); 
    } else {
      this.subCategoryService.updateSubCategory(this.subCategoryForm.value).subscribe(resp =>{
          this.toaster.successToastr('Sub category updated successfully .');  
    }, err => {
        this.toaster.errorToastr('Failed to update sub category');
      });
    }
    this.dialogRef.close();
  }
  }

}
