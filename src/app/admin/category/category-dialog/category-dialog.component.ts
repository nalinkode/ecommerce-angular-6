import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../shared/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../shared/category';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  categoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  categories = [];

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef : MatDialogRef<CategoryDialogComponent>
              ) { }

  ngOnInit() {
      this.getAllCatgory();
      this.createCategoryForm();
      this.editCategoryForm();
  }

  createCategoryForm(){
     this.categoryForm = this.fb.group({
     category: ['', Validators.required],
     subCategory: ['', Validators.required], 
     isActivate:['', Validators.required]
   });
  }

  editCategoryForm(){ 
    if (this.data.eCategory){
    this.categoryForm.patchValue({
      category: this.data.eCategory.category,
      subCategory: this.data.eCategory.subCategory,
      isActivate: this.data.eCategory.status
    });
    }
  }

  getAllCatgory(){
    this.categoryService.getAllCategory().subscribe(resp => {
        this.categories = resp as Category[]; 
    })
  }

  changeCategory(e) {
    console.log(e.value)
    this.categoryForm.value.Category.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.categoryForm.value);
    this.toaster.successToastr('Category added successfully .');  
    console.log(this.data.esubCategory.subCategoryId);
    this.toaster.successToastr('Sub category added successfully .');  
    this.dialogRef.close();
  }
}