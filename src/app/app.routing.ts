import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { OrderComponent } from './admin/order/order.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { OurTeamComponent } from './views/about-us/our-team/our-team.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { HomeLayoutComponent } from './container/home-layout/home-layout/home-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductImageComponent } from './admin/product/add-product-image/add-product-image.component';

//auth

import { RoleGuard } from './views/auth/role.guard';
import { AuthGuard } from './views/auth/auth.guard';

//Error component
import { P500Component, P404Component } from './views/error/';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent
    },
     {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [RoleGuard], data: {role: 'Admin'},
        children: [
        {path:'', component: DashboardComponent },
        {path:'dashboard', component: DashboardComponent },  
        {path:'user', component: UserlistComponent},
        {path:'order', component: OrderComponent },
        {path:'product', component: ProductComponent, 
        children:[
              {path:'upload_image/:id', component: AddProductImageComponent}
          ]},
        {path:'category', component: CategoryComponent }
        ]
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'register', 
        component: RegisterComponent 
    },
    { 
        path: 'about-us', 
        component: OurTeamComponent 
    },

    { 
        path: 'contact-us', 
        component: ContactUsComponent 
    },

    // ERROR 
    { 
      path: '404',
      component: P404Component,
      data: {
        title:'Page-404'
      }
    },
    { 
      path: '500',
      component: P500Component,
      data: {
        title:'Page-500'
      }
    },
    
    { path: '**', component: P404Component }
];

export const routing = RouterModule.forRoot(appRoutes);



