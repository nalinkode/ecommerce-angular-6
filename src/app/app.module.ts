import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';

//routing module
import { routing } from './app.routing';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

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
import { P500Component, P404Component  } from './views/error';


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

