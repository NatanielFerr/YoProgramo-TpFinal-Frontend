import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url:string = "https://back-end-natanielferreyra15.koyeb.app/personas/autenticacion/login";
// url:string = "http://localhost:8080/personas/autenticacion/login";
 currentUserSubject: BehaviorSubject<any>;
  sessionStorage: any;

  constructor(private http: HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

   IniciarSesion(credenciales: any):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data=> {
     sessionStorage.setItem('currentUser', JSON.stringify(data));
     this.currentUserSubject.next(data);
     return data;
    }));
   }   
   get usuarioAutenticado(){
    return this.currentUserSubject.value;
   }

   CerrarSesion():void{
    sessionStorage.clear();
   }

}
