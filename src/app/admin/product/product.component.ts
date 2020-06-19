import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product/product.service';


import { Product } from '../product/product;
import { DialogboxComponent } from '../dialogbox/dialogbox.component';




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

   public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  public addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  public updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  public deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
 

}

 