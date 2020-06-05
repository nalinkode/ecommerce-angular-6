import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = Cookie.get('token'); // you probably want to store it in localStorage or something

    if (token) {
      const cloned = req.clone({
        headers : req.headers.set("Authorization","Bearer" + token )
      });
      
      let userId = null;
      if (Cookie.get('userId')) {
        userId = Cookie.get('userId');
      }
      const cloned2 = cloned.clone({
         headers: cloned.headers.set('UserId', userId)
      });
      return next.handle(cloned2);
    }
       return next.handle(req);
    }


}