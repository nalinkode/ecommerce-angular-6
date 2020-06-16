import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product/product.service';

export interface Product {
  productId: number;
  name: string;
  categroy: string;
  price: number;
  imgUrl: string;
  description: string;
 }

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ELEMENT_DATA : Product[];
  displayedColumns: string[] = ['productId','name','categroy','imgUrl','price','description'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  constructor(private productService : ProductService) { }
  
  @ViewChild(MatPaginator, {static:}) paginator: MatPaginator;
   
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllProduct();
  }

  public getAllProduct(){
    let response = this.productService.getAllProduct()
    response.subscribe(list =>this.dataSource.data = list as Product[]);
  }

}

 