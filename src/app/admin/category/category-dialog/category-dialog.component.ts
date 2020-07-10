import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CategoryService } from '../../../shared/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
  categoryForm : FormGroup; 
  @BlockUI() blockUI: NgBlockUI;
  constructor(private fb: FormBuilder,
              private categoryService: CategoryService, 
              private toaster: ToastrManager, 
              private http: HttpClientModule
              ) { }

  ngOnInit() {
      this.createCategoryForm();
  }

  createCategoryForm(){
     this.categoryForm = this.fb.group({
     category: ['', Validators.required], 
     subCategory: ['', Validators.required],
     isActivated:[tr]
   });
  }

}