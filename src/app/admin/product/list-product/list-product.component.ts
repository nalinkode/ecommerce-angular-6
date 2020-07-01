import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @BlockUI('prodlist') blockUI: NgBlockUI;
  ELEMENT_DATA : Product[];
  displayedColumns: string[] = ['productId', 'name', 'category', 'subCategory','imgUrl', 'price', 'offerPrice', 'description', 'action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  
  isPopupOpen = false;

  constructor(private productService : ProductService,
             private dialogService : DialogService,
             private router: Router,
             private route : ActivatedRoute,
             private toastr : ToastrManager,     
             private dialog? : MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllProduct();
  }

  public getAllProduct(){
    this.blockUI.start();
    let response = this.productService.getAllProduct()
    response.subscribe(list =>this.dataSource.data = list as Product[]);
    this.blockUI.stop();
  }

   public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  public addProduct(){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: {}
    });
        dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

   public editProduct(eproduct : Product[]){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: eproduct
    });
    
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

  public deleteProduct(eproduct){
     this.dialogService.openConfirmedDialog('Are you sure to delete this record ?')
     .afterClosed().subscribe(res => {
        if(res){
          this.productService.deleteProduct(eproduct);
          this.toastr.successToastr('Product deleted successfully.');;

        }
     });
  }

  addProductImage(id : number){
     this.router.navigate(['/admin/product/upload_image',id])

  }

}