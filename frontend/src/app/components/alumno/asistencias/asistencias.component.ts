import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/models/asistencia';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent implements OnInit {

  asistenciascont: number=0;
  inasistenciacont: number=0;
  asistencia: Asistencia;
  arraydeAsistencias: Array<Asistencia>;
  constructor(private alumnoserv: AlumnoService) {
    this.cargarAsistencia();
   }

  ngOnInit(): void {
  }

  cargarAsistencia(){
    this.arraydeAsistencias=new Array<Asistencia>();
    this.alumnoserv.getAsistencias().subscribe(
      result=>{
        result.forEach(element => {
          let vAsistencia=new Asistencia();
          Object.assign(vAsistencia,element);
          if(vAsistencia.asistio==true){
            this.asistenciascont++;
          }
          else
          {
            this.inasistenciacont++;
          }
          this.arraydeAsistencias.push(vAsistencia);
        });
      }
    )
  }
}
