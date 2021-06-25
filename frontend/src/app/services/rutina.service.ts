import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/ejercicio';
import { Rutina } from '../models/rutina';

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
  getRutina(id:String):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }

    return this._http.get(this.url+"/"+id, httpOption);
  }

  addRutina(rutina: Rutina):Observable<any>{    
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(rutina); 
    return this._http.post(this.url, body, httpOption);
  }

  addEjercicio(idrutina: string, ejercicio: Ejercicio):Observable<any>{    
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(ejercicio); 
    return this._http.post(this.url+idrutina+"/ejercicio", body, httpOption);
  }

  getEjercicios(idderutina: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }

    return this._http.get(this.url+idderutina+"/ejercicios", httpOption);
  }

  deleteEjercicio(idrutina: string,idejercicio: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    return this._http.delete(this.url+idrutina+"/ejercicio/"+idejercicio, httpOption);
  }
}
