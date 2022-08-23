import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: Observable<string>;

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authService.getToken().subscribe(res => {
      const authReq = req.clone({
        headers: req.headers.set('access_token', res),
      });
      return next.handle(authReq);
    });

    return next.handle(req);
  }
}
