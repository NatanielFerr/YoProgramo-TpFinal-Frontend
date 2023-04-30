import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
url:string = "https://back-end-natanielferreyra15.koyeb.app/habilidades/";
// url:string = "http://localhost:8080/habilidades/";
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }

  public save(Habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Habilidad);
  }

  public update(id:number, Habilidad: Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Habilidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
