import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  url: string = "http://localhost:3000/api/rutina/";

  constructor(private _http: HttpClient) { }

  getRutinas():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }

    return this._http.get(this.url, httpOption);
  }

  createRutina(ejercicios: Array<Ejercicio>, nivel: Number):Observable<any>{    
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    let body = {
      "ejercicio": ejercicios,
      "nivel": nivel
    }
    return this._http.post(this.url, body, httpOption);
  }
}
