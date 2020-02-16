import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenStoreService } from './token-store.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements CanActivate, HttpInterceptor {
  constructor(private router: Router, private tokenStore: TokenStoreService) {
    this.tokenStore.select$().subscribe(token => (this.token = token));
  }

  private token = '';

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import('@angular/router').UrlTree
    | Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = { Authorization: 'Bearer ' + this.token };
    const authReq = req.clone({ setHeaders: authHeader });
    return next.handle(authReq).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err: any) {
    const unauthorized_code = 401;
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized_code) {
        this.router.navigate(['register']);
      }
    }
    return throwError(err);
  }
}
