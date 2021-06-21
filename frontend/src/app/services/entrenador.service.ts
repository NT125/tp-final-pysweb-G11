import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  url:string="http://localhost:3000/api/"
  constructor(private http: HttpClient) { }

  addAlumno(alumno: Alumno):Observable<any>{
      let httpOption= {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
        params: new HttpParams({
      
        })
      }
      let body= JSON.stringify(alumno);
      return this.http.post(this.url+"alumno/",body,httpOption);
    
  }

  addUsuario(usuario: Usuario,idalumno: string):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(usuario);
    return this.http.post(this.url+"alumno/"+idalumno+"/usuario",body,httpOption);
  }  

  getAlumnosSinCuenta():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno/nada/usuarios",httpOption);
  }  
}
