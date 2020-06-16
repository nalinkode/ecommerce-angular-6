import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from '../product/product.service';

export interface Product {
  name: string;
  price: number;
  imgUrl: string;
 }


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ELEMENT_DATA : Product[];
  displayedColumns: string[] = ['name', 'price', 'imgUrl'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  public getAllproduct(){
    let response = this.productService.getAllProduct()
    response.subscribe(list =>this.dataSource.data = list as Product[]);
  }

}

 