import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/proyectos/";
  // url:string = "http://localhost:8080/proyectos/";
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  }

  public save(Proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Proyecto);
  }

  public update(id:number, Proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
