import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor( private router : Router ){}
  
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const TRUE = 'true';  
    const isloggedIn = Cookie.get('isLoggedIn');
  
    if(isloggedIn === TRUE) {
      return true;
    } 
    this.router.navigate(['login']);
    return false;
  }
}
