import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { Asistencia } from '../models/asistencia';
import { Pago } from '../models/pago';
import { Registro } from '../models/registro';
import { Rutina } from '../models/rutina';
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

  addPago(id: string, pago: Pago):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(pago);
    return this.http.post(this.url+"alumno/"+id+"/pago",body,httpOption);
  }  
  addRegistro(id: string, registro: Registro):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(registro);
    return this.http.post(this.url+"alumno/"+id+"/registro",body,httpOption);
  }  
  addAsistencia(id: string, asistencia: Asistencia):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(asistencia);
    return this.http.post(this.url+"alumno/"+id+"/asistencia",body,httpOption);
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

  getAlumnos():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno",httpOption);
  }  

  getAlumno(id: string):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno/"+id,httpOption);
  }  

  getAlumnosporPlan(idplan: string):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno/"+idplan+"/plan",httpOption);
  } 
  getAlumnosporDni(dni: number):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno/"+dni+"/dni",httpOption);
  } 
  getRutinasAlumno(id: string):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url+"alumno/"+id+"/rutinas",httpOption);
  } 

  deleteRutina(id: string,indice: number):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.delete(this.url+"alumno/"+id+"/rutina/"+indice, httpOption);
  }

  addRutina(idalumno: string,rutina: Rutina):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(rutina);
    return this.http.post(this.url+"alumno/"+idalumno+"/rutina",body,httpOption);
  }  

  editAlumno(alumno: Alumno):Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
    
      })
    }
    let body= JSON.stringify(alumno);
    return this.http.put(this.url+"alumno/",body,httpOption);
  }

}
