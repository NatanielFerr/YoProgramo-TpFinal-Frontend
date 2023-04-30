import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  url:string = "https://back-end-natanielferreyra15.koyeb.app/curriculums/";
  // url:string = "http://localhost:8080/curriculums/";
  constructor(private httpClient:HttpClient) { }
  
  public lista():Observable<Cv[]>{
    return this.httpClient.get<Cv[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Cv>{
    return this.httpClient.get<Cv>(this.url + `detail/${id}`);
  }

  public save(Cv: Cv):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Cv);
  }

  public update(id:number, Cv: Cv):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, Cv);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
