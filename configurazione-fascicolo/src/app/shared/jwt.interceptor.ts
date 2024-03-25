import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    // Set headers for requests that require authorization.
    if (token !== null) {
      const authenticatedRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      // Request with authorization headers
      return next.handle(authenticatedRequest).pipe(
        tap(
          (value) => {},
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status !== 401) {
                return;
              }
              this.authService.logout();
              this.router.navigateByUrl('/');
            }
          }
        )
      );
    } else {
      // Request without authorization header
      return next.handle(request);
    }
  }
}
