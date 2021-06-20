import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = "http://localhost:3000/api/usuarios/";
  }

  public login(username: string, password: string): Observable<any> {
    
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ username: username, password: password });
    return this._http.post(this.hostBase + 'login', body, httpOption);
  }

  public logout() {
    //borro el vble almacenado mediante el storage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("perfil");
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("idalumno");
  }

  public userLoggedIn() {
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if (usuario != null) {
      resultado = true;
    }
    return resultado;
  }
  
  public userLogged() {
    var usuario = sessionStorage.getItem("user");
    return usuario;
  }
  
  public perfilLogged() {
    var perfil = sessionStorage.getItem("perfil");
    return perfil;
  }

  public alumnoLogged() {
    var alumnoid = sessionStorage.getItem("idalumno");
    return alumnoid;
  }

  public idLogged() {
    var id = sessionStorage.getItem("userid");
    return id;
  }

  getToken(): string {
    if (sessionStorage.getItem("token") != null) {
      return sessionStorage.getItem("token");
    } else {
      return "";
    }
  }
}
