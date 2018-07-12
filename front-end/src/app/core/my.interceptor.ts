import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {LoaderService} from './services/loader.service';

export const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.loader.start();

    req = req.clone({
      url: BASE_URL + req.url
    });

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        this.loader.complete();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
          /*this.auth.logout(true);*/
          console.log('NOT OK');
        }
      }
    });
  }
}
