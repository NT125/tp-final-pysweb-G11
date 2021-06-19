import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  url: string = 'http://localhost:3000/api/alumno/';

  constructor(private _http: HttpClient) {}

  createAlumno(
    apellido: String,
    nombre: String,
    dni: String,
    bday: String,
    cel: Number,
    sday: String,
    domicilio: String,
    email: String
  ): Observable<any> {

    let body = {
      "apellido": apellido,
      "nombre": nombre,
      "nro_documento": dni,
      "fecha_nacimiento": bday,
      "celular": cel,
      "fecha_inicio": sday,
      "domicilio": domicilio,
      "email": email
    }

    return this._http.post(this.url, body)
  }
}
