import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {

  url:string="http://localhost:3000/api/alumno/"+this.loginserv.alumnoLogged();
  constructor(private http: HttpClient,private loginserv: LoginService) { }

  ngOnInit(): void {
  }

  getPagos():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    console.log(this.url);
    return this.http.get(this.url+"/pagos",httpOption);
  }

  getRutinas():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    console.log(this.url);
    return this.http.get(this.url+"/rutinas",httpOption);
  }

  getAsistencias():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    console.log(this.url);
    return this.http.get(this.url+"/asistencias",httpOption);
  }
}
