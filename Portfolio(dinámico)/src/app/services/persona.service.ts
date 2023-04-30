import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/personas/";
  // url:string = "http://localhost:8080/personas/";
  constructor(private httpClient:HttpClient) { }
  
  public verpersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'ver/personas');
  }

  public detallespersona(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `detail/${id}`);
  }

  public agregarpersona(Persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/persona', Persona);
  }

  public editarpersona(id:number, Persona: Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/persona/${id}`, Persona);
  }

  public eliminarpersona(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/persona/${id}`);
  }
}
