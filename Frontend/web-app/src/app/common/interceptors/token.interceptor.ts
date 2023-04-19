import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }
  //   static get authHeader(): string {
  //     const token = localStorage.getItem("token");
  //     return "Bearer " + token;
  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localToken = localStorage.getItem('token')

    if (
      (request.url === `${baseUrl}/api/products?populate=*`) ||
      (request.url === `${baseUrl}/api/categories?populate=*`)
    ) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localToken}`,
        },
      });
    }
    // if (request.url.search('/local') === -1 ||
    // request.url.search('/register') === -1 ) {
    //   request = request.clone({
    //     setHeaders: {
    //           'Content-Type' : 'application/json; charset=utf-8',
    //           'Accept'       : 'application/json',
    //           'Authorization': `Bearer ${localToken}`, 
    //         },
    //   });
    // }
    return next.handle(request);
  }
}
