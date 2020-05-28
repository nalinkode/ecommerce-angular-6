import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
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
    { path: '**', redirectTo: '' }
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