import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {
    console.log(request)
    if (!request.url.includes('auth-token')){
      const modified = request.clone({
        setHeaders: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
