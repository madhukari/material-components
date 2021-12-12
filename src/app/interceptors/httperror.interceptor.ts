import {Injectable} from '@angular/core';
import {HttpRequest,HttpHandler,HttpInterceptor,HttpErrorResponse,HttpResponse,HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     //By pass Interceptors:   https://medium.com/mikes-fullstack-ladder/how-to-skip-http-interceptor-dee136e54a5f
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                alert(data)
                return throwError(error);
            }));
    }
}