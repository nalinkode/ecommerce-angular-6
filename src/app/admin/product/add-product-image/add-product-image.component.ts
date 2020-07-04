import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {
  public productImageForm : FormGroup; 
  images = [];

  constructor(private route : ActivatedRoute,
  private router : Router,
  private productService : ProductService,
  private fb: FormBuilder,
  private toaster: ToastrManager  ) { }

  ngOnInit() {
     this.getByProductId();
     this.createProductImageForm();
  }

  createProductImageForm(){
    this.productImageForm = this.fb.group({
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
                   this.productImageForm.patchValue({
                      fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  getByProductId(){
     this.route.paramMap.subscribe(params =>{
      const productId = +params.get('id');
      if(productId) {
         this.productService.getProductById(productId).subscribe(resp =>{
              console.log(resp)
         });
      }
      console.log(productId);
    });
  }
  goToProduct(){
    this.router.navigate(['admin/product']);
  }

}