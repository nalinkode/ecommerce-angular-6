import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { DialogService } from '../../../shared/dialog.service';
import { Category } from '../../../shared/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  ELEMENT_DATA : Category[];
  displayedColumns: string[] = ['serialNumber','category', 'status', 'action'];
  dataSource = new MatTableDataSource<Category>(this.ELEMENT_DATA);
  
  isPopupOpen = false;
  isLoading = true;

  constructor(
             private dialogService : DialogService,
             private router: Router,
             private toastr : ToastrManager,     
             private dialog? : MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
  }

  public getAllProduct(){
    let response = this.categoryService.getAllProduct()
    response.subscribe(list =>{
      this.dataSource.data = list as Category[];
      this.isLoading = false;
      }, err =>{
        this.isLoading = false; 
      });
  }

   public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  public addProduct(){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: { message:"Add category" }
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

   public editProduct(eCategory : Category[]){
    console.log(eCategory)
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: { eCategory,
            message:"Edit category"
          }
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

  public deleteCategory(eCategory){
     this.dialogService.openConfirmedDialog('Are you sure to delete this record ?')
     .afterClosed().subscribe(res => {
        if(res){
         
          this.toastr.successToastr('Product deleted successfully.');;

        }
     });
  }

   blockedUI(value) {
     debugger
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
      this.blockUI.stop(); // Stop blocking
     }
  }
}