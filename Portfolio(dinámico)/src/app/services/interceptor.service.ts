import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authServicio: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.authServicio.usuarioAutenticado;
    if (currentUser && currentUser.id){
      req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.id}`
        }
      })
    }
    return next.handle(req);
  }
}
