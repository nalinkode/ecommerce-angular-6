import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
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
  displayedColumns: string[] = ['productId','name','categroy','imgUrl','price','description', 'action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  constructor(private productService : ProductService, private dialog : MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllProduct();
  }

  public getAllProduct(){
    let response = this.productService.getAllProduct()
    response.subscribe(list =>this.dataSource.data = list as Product[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

}

 