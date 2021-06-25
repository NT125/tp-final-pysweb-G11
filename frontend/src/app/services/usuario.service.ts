import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string="http://localhost:3000/api/usuarios/";
  constructor(private http: HttpClient) {
  }

  getUsuarios():Observable<any>{
    let httpOption= {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
    
      })
    }
    return this.http.get(this.url,httpOption);
  }

}
