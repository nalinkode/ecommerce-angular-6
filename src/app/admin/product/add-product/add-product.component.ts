import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  category: any = ['Men', 'Women', 'Kids', 'Fashion'];
  subCategory: any = ['Shoes','watches'];
  public productForm : FormGroup; 
  images = [];
  
  constructor(
    private productService : ProductService,
    private dialogRef : MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toaster: ToastrManager 
  ) { }

  ngOnInit() {
     this.createProductForm();
  }

  changeCategory(e) {
    this.data.category.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeSubcategory(e) {
    this.data.subCategory.setValue(e.target.value, {
      onlySelf: true
    })
  }

  createProductForm(){
   //forms controll
   this.productForm = this.fb.group({
     productName: ['', Validators.required],
     category: ['', Validators.required],
     subCategory: ['', Validators.required],
     price: ['', Validators.required],
     offerPrice: ['' , Validators.required],
     description: ['', Validators.required],
     file: new FormControl('', [Validators.required]),
     fileSource: new FormControl('', [Validators.required])
   });
  }   
  
   onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
                   this.productForm.patchValue({
                      fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
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