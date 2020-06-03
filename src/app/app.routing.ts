import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';

import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { OrderComponent } from './admin/order/order.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
     {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'admin', 
        component: AdminComponent,
        canActivate:[],
        children: [
        {path:'user', component: UserlistComponent },
        {path:'order', component: OrderComponent },
        {path:'product', component: ProductComponent },
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
    // otherwise redirect to home
    { path: '**', component:  }
];

export const routing = RouterModule.forRoot(appRoutes);




/*
   
    RouterModule.forRoot([
      { path:'', redirectTo:'/home', pathMatch:'full' },
      { path:'home', component: HomeComponent},
      { path:'login', component: LoginComponent},
      { path:'register', component: RegisterComponent},
      { path:"**", component: PageNotFoundComponent },
*/