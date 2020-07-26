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
import { CategoryService } from '../../../shared/category.service';
import { AddSubcategoryDialogComponent } from './add-subcategory-dialog/add-subcategory-dialog.component';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  ELEMENT_DATA : Category[];
  displayedColumns: string[] = ['serialNumber','categoryName','subCategoryName','isActivate', 'action'];
  dataSource = new MatTableDataSource<Category>(this.ELEMENT_DATA);
  
  isPopupOpen = false;
  isLoading = true;
  finalCat = [];
  
  constructor(
             private categoryService : CategoryService,
             private dialogService : DialogService,
             private router: Router,
             private toastr : ToastrManager,     
             private dialog? : MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getAllSubcategory();
  }

  public getAllSubcategory(){
    let response = this.categoryService.getAllCategory()
    response.subscribe(list =>{
      let tempCat = [];
      tempCat = list as Category[];
      
      for(let i=0; i<tempCat.length;i++){  
        for(let j=0;j<tempCat[i].subCategory.length;j++){
          let cat = {};
          cat['categoryId'] = tempCat[i].categoryId;
          cat['categoryName'] = tempCat[i].categoryName;
          cat['subCategoryId'] = tempCat[i].subCategory[j].subCategoryId;
          cat['subCategoryName'] = tempCat[i].subCategory[j].subCategoryName;
          cat['isActivate'] = tempCat[i].subCategory[j].isActivate;
          this.finalCat.push(cat);
        }
      }
      this.dataSource.data = this.finalCat as Category[];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
      }, err =>{
        this.isLoading = false; 
      });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  public addSubcategory(){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddSubcategoryDialogComponent,{
    width: "450px", 
    position: { top : "90px"},
    data: { message : "Add sub category"}
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

   public editSubcategory(esubCategory : Category[]){
    console.log(esubCategory)
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddSubcategoryDialogComponent,{
    width: "450px", 
    position: { top : "90px"},
    data: { esubCategory,
            message : "Edit sub category"
          }
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

  public deleteSubcategory(esubCategory){
     this.dialogService.openConfirmedDialog('Are you sure to delete this record ?')
     .afterClosed().subscribe(res => {
        if(res){
         
          this.toastr.successToastr('Sub category deleted successfully.');;

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
