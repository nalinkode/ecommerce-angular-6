import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../../shared/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../../shared/category';

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
     category: ['', Validators.required],
     subCategory: ['', Validators.required], 
     isActivate: ['', Validators.required]
   });
  }

  editSubCategoryForm(){
    if(this.data.esubCategory){
      this.subCategoryForm.patchValue({
      category: this.data.esubCategory.categoryId,
      subCategory: this.data.esubCategory.subCategoryName,
      isActivate: this.data.esubCategory.status
    });
    }
  }

  getAllCatgory(){
    this.categoryService.getAllCategory().subscribe(resp => {
        this.categories = resp as Category[]; 
        console.log(this.categories)
    })
  }

   changeCategory(e) {
    console.log(e.value)
    this.subCategoryForm.value.Category.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.subCategoryForm.value);
    console.log(this.data.esubCategory.subCategoryId);
    this.toaster.successToastr('Sub category added successfully .');  
    this.dialogRef.close();
  }


}
