import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = Cookie.get('token'); // you probably want to store it in localStorage or something
const token ="123555544544";
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
      debugger
    }
       return next.handle(req);
    debugger
    }


}