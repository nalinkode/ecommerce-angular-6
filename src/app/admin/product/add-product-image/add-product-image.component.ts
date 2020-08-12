import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';
import { Image } from '../image';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatTableDataSource } from '@angular/material/table';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {
  public productImageForm : FormGroup; 
  images = [];
  file : string;
  myFiles: string [] = [];

  isLoading = true;
  @BlockUI() blockUI: NgBlockUI;
  ELEMENT_DATA : Image[];
  displayedColumns: string[] = ['serialNumber','imageId','location', 'action'];
  dataSource = new MatTableDataSource<Image>(this.ELEMENT_DATA);
  @ViewChild('image') image : ElementRef;
  constructor(private route : ActivatedRoute,
  private router : Router,
  private productService : ProductService,
  private dialogService : DialogService,
  private fb: FormBuilder,
  private toaster: ToastrManager  ) { }

  ngOnInit() {
     this.getImageByProductId();
     this.createProductImageForm();
  }

  createProductImageForm(){
    this.productImageForm = this.fb.group({
      file: ['']
   });
  }

   onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        for (let i = 0; i < event.target.files.length; i++) {
                this.file = event.target.files[i];
                this.myFiles.push(event.target.files[i]);
                this.productImageForm.get('file').setValue(this.myFiles);
                var reader = new FileReader();
                reader.onload = (event:any) => {
                   this.images.push(event.target.result);
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  getImageByProductId(){
     this.route.paramMap.subscribe(params =>{
      const productId = +params.get('id');
      if(productId) {
         this.productService.geImageProductById(productId).subscribe(resp =>{
              this.dataSource.data = resp as Image[];
              this.isLoading = false;
         }, err => {
               this.isLoading = false;
         });
      }
    });
  }


  deleteProductImage(id : number){

    this.dialogService.openConfirmedDialog('Are you sure to delete this product image ?')
     .afterClosed().subscribe(res => {
        if(res){
          this.productService.deleteProductImage(productImage);
          this.toaster.successToastr('Product image deleted successfully.');
        }
     });

  }

  onSubmit(){
    let id;
    this.route.paramMap.subscribe(params =>{
       id = +params.get('id');
     });
      if(id && this.myFiles.length != 0) {
          const formData = new FormData();
          for(let i = 0; i< this.myFiles.length; i++){
             formData.append('files', this.myFiles[i]);
          }

          this.productService.addProductImage(formData,id).subscribe(resp=>{
               this.toaster.successToastr('Product images added successfully');
               this.getImageByProductId();
          }, err => {
        
          });             
       }
  }
   
  goToProduct(){
    this.router.navigate(['admin/product']);
  }

  private removeImage(index) {
    this.images.splice(index,1);
    this.myFiles.splice(index,1);
  }

  

   blockedUI(value) {
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
      this.blockUI.stop(); // Stop blocking
     }
  }
}
