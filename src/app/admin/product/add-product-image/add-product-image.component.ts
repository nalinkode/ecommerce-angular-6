import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {

  constructor(private route : ActivatedRoute,
  private router : Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      const productId = params.get('id');
      console.log(productId);
    });
  }

  product(){
    this.router.navigate.(['admin/product']);
  }

}