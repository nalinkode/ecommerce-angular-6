import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { CategoryService } from '../../../shared/category.service';
import { Category } from '../../../shared/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public productForm : FormGroup; 
  images = [];
  categories = [];
  subCategories = [];  
  
  constructor(
    private productService : ProductService,
    private categoryService : CategoryService,
    private dialogRef : MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toaster: ToastrManager 
  ) { }

  ngOnInit() {
     this.getAllCategory();
     this.createProductForm();
     this.editProductForm();
  }

  onChangeCategory(e) {
   
     console.log("The category Id========> " + e);
  }

  createProductForm(){
   //forms controll
   this.productForm = this.fb.group({
     productName: ['', Validators.required],
     category: ['', Validators.required],
     subCategory: ['', Validators.required],
     price: ['', Validators.required],
     offerPrice: ['' , Validators.required],
     description: ['', Validators.required]
   });
  }

  editProductForm(){
   if(this.data.eproduct){
    this.productForm.patchValue({
     productName: this.data.eproduct.productName,
     category: this.data.eproduct.categoryId,
     subCategory: this.data.eproduct.subCategoryId,
     price: this.data.eproduct.price,
     offerPrice: this.data.eproduct.offerPrice,
     description: this.data.eproduct.description
    });   
   }
  }
  
  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(resp => {
       this.categories = resp as Category[];
    });
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    this.productService.addProduct(this.productForm.value);
    this.toaster.successToastr('Product added successfully .');  
    this.dialogRef.close();
  }
}
