import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-gestionar-alumno',
  templateUrl: './gestionar-alumno.component.html',
  styleUrls: ['./gestionar-alumno.component.css']
})
export class GestionarAlumnoComponent implements OnInit {

  arraydeAlumnos:Array<Alumno>;
  constructor(private entrenenadorserv: EntrenadorService,private route:Router) { 
    this.cargarAlumnos();
  }

  ngOnInit(): void {
  }

  cargarAlumnos(){
    this.arraydeAlumnos=new Array<Alumno>();
    this.entrenenadorserv.getAlumnos().subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno=new Alumno();
          Object.assign(vAlumno,element);
          this.arraydeAlumnos.push(vAlumno);
        });
      }
    )
  }
 
  crearPago(id: string){
    this.route.navigate(["entrenador/pagos/", id])
  }

}
