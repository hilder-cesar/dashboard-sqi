import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorAppInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private gService: GenericService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((responseOne: any) => {
          if (responseOne.status === 401) {
            const authentication = this.authenticationService.getAuthentication();
            const getTokenByType = `${authentication.userType === 0 ? 'UserCompany/Token' : 'UserEventual/Token'}`;
            const value = { refreshToken: authentication.refresh_token };
            return this.gService.post(getTokenByType, value)
              .pipe(
                tap(() => this.authenticationService.unsetAuthentication()),
                mergeMap((responseTwo: any) => {
                  this.authenticationService.setAuthentication(responseTwo.data, true);
                  req = req.clone({ setHeaders: { Authorization: `bearer ${responseTwo.data.access_token}` } });
                  return next.handle(req);
                }),
                catchError((responseTwo: any) => {
                  this.router.navigate(['/']);
                  return throwError(responseTwo.error);
                })
              );
          }
          return throwError(responseOne.error || responseOne);
        })
      );
  }
}
