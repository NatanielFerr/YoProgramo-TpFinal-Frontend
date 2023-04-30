import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/redes/";
  // url:string = "http://localhost:8080/redes/";
  constructor(private httpClient:HttpClient) { }
  public lista():Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Red>{
    return this.httpClient.get<Red>(this.url + `detail/${id}`);
  }

  public save(Red: Red):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Red);
  }

  public update(id:number, Red: Red):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Red);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
