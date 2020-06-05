import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ng6-toastr-notifications';

//routing module
import { routing } from './app.routing';
import { Router ,RouterModule, Routes } from '@angular/router';
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

//auth
import { AuthInterceptor } from './views/auth/AuthInterceptor';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
    HttpClientModule,
    NgbModule,
    routing,
    SidebarModule.forRoot(),
    BlockUIModule.forRoot()

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
    P404Component,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppModule { }

