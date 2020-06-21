import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { AddProductComponent } from './add-product/add-product.component';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  ELEMENT_DATA : Product[];
  displayedColumns: string[] = ['productId', 'name', 'categroy', 'subCategory','imgUrl', 'price', 'offerPrice', 'description', 'action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  
  isPopupOpen = false;

  constructor(private productService : ProductService, private dialog? : MatDialog) { }

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

   public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  public addProduct(){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    data: {} 
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }
  
   public editProduct(id : number){
    this.isPopupOpen = true;
    const product = this.productService.getAllProduct().find(prod => prod.productId === id );
    const dialogRef = this.dialog.open(AddProductComponent,{
    //data: product
    });
    
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }
  

}

 