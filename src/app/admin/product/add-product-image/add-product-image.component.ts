import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {

  constructor(private route : ActivatedRoute,
  private router : Router,
  private productService : ProductService ) { }

  ngOnInit() {
     this.getByProductId();
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