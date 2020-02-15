import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenStoreService } from './token-store.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  private token = '';
  constructor(private router: Router, private tokenStore: TokenStoreService) {
    this.tokenStore.select$().subscribe(token => (this.token = token));
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = { Authorization: 'bearer ' + this.token };
    const authReq = req.clone({ setHeaders: authHeader });
    return next.handle(authReq).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err: any) {
    const unauthorized_code = 401;
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized_code) {
        this.router.navigate(['security/register']);
      }
    }
    return throwError(err);
  }
}
