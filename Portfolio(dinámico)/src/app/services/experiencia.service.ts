import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/experiencias/";
  // url:string = "http://localhost:8080/experiencias/";
  constructor(private httpClient:HttpClient) { }
  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
  }

  public save(Experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Experiencia);
  }

  public update(id:number, Experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
