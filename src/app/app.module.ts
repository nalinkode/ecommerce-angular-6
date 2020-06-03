
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router ,RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

//custom component
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { OrderComponent } from './admin/order/order.component';

//Error component
import { P500Component } from './views/error/500/500.component';
import { P404Component } from './views/error/404/404.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    routing,
    SidebarModule.forRoot(),
    JwtModule.forRoot({}),


  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    OrderComponent,
    UserlistComponent,
    ProductComponent,
    CategoryComponent,
    P500Component,
    P404Component
  ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
       
    RouterModule.forRoot([
      { path:'', redirectTo:'/home', pathMatch:'full' },
      { path:'home', component: HomeComponent},
      { path:'login', component: LoginComponent},
      { path:'register', component: RegisterComponent},
      { path:"**", component: PageNotFoundComponent },
      

      //Admin
    ])
       
       
    
       
        { path:"admin", component: AdminComponent ,
      children: [
        {path:'addproduct', component: AddProductComponent},
        {path:'listproduct', component: ProductListComponent}
         ]
        }



{path:'',
      children:[
           {path:'', redirectTo:'', pathMatch:'full'},
          {path:'login', component:LoginComponent},        
         {path:'register', component:RegisterComponent}
        
       ]},
*/