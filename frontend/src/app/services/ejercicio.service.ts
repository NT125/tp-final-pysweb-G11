import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  url: string = "http://localhost:3000/api/ejercicio";

  constructor(private _http: HttpClient) {}

  getEjercicios():Observable<any>{
    return this._http.get(this.url);
  }
}
