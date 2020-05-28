import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router ,RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './services/user.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    routing,
    JwtModule.forRoot({}),
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
      
  ],
  bootstrap: [ AppComponent ],
  providers: [UserService]
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