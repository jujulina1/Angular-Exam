import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, Provider } from "@angular/core";
import { Observable, catchError, pipe, throwError , of} from "rxjs";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";


@Injectable()
export class AppInterceptor implements HttpInterceptor{
    
   

    constructor(   private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
     //1.we have to take token
        const token = AuthService.user?.accessToken; // undefined if we dont have
       
         if (token) {
         
            req = req.clone({
                setHeaders: {
                    'X-Authorization': `${token}`,
                    
                }//,withCredentials:true
            });
          }
        
    
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {//Client Side Error
                    console.log("This is client side error");
                  
                    errorMsg = `Error: ${error.error.message}`
                }else {
                    console.log('This is server side error');
                    errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
                   
                 }
                return throwError(() => new Error(errorMsg))
            })
        )
    }
    
}
export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  };
