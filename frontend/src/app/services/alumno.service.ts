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
  

  getPago(id:String):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    console.log(this.url);
    return this.http.get(this.url+"/pago/"+id,httpOption);
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

  getAlumnos():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get("http://localhost:3000/api/alumno/",httpOption);
  }

}
