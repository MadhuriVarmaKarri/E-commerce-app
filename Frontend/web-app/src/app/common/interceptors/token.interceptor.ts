import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localToken = this.authService.getToken()

    
    if (request.url.search('/auth/local') === -1 )    {
      request = request.clone({
        setHeaders: {
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json',
              'Authorization': `Bearer ${localToken}`, 
            },
      });
    }
    return next.handle(request);
  }
}
