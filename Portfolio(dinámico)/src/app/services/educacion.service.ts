import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/educaciones/";
  // url:string = "http://localhost:8080/educaciones/";
  constructor(private httpClient:HttpClient) { }
  
  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(Educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Educacion);
  }

  public update(id:number, Educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
