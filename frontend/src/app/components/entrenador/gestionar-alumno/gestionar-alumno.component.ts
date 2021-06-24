import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { Rutina } from 'src/app/models/rutina';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { PlanService } from 'src/app/services/plan.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-gestionar-alumno',
  templateUrl: './gestionar-alumno.component.html',
  styleUrls: ['./gestionar-alumno.component.css']
})
export class GestionarAlumnoComponent implements OnInit {

  nivel: string;
  dni:number;
  planseleccionado: string;
  arraydeAlumnos:Array<Alumno>;
  arraydePlan: Array<Plan>;
  constructor(private entrenenadorserv: EntrenadorService,private route:Router,private planserv: PlanService) { 
    this.cargarAlumnos();
    this.cargarPlan();
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
  crearAsistencia(id: string){
    this.route.navigate(["entrenador/asistencia/", id])
  }
  crearRegistro(id: string){
    this.route.navigate(["entrenador/registro/", id])
  }
  creaRutina(id: string){
    console.log("xd")
    this.route.navigate(["entrenador/add-rutina-alumno/", id])
  }


  cargarPlan(){
    this.arraydePlan=new Array<Plan>();
    this.planserv.getPlanes().subscribe(
      result=>{
        result.forEach(element => {
          let vPlan= new Plan();
          Object.assign(vPlan,element);
          this.arraydePlan.push(vPlan);
        });
      }
    )
  }

  buscarporPlan(){
    this.arraydeAlumnos=new Array<Alumno>();
    this.entrenenadorserv.getAlumnosporPlan(this.planseleccionado).subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno=new Alumno();
          Object.assign(vAlumno,element);
          this.arraydeAlumnos.push(vAlumno);
        });
      }
    )
  }

  buscarporDni(){
    this.arraydeAlumnos=new Array<Alumno>();
    this.entrenenadorserv.getAlumnosporDni(this.dni).subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno=new Alumno();
          Object.assign(vAlumno,element);
          this.arraydeAlumnos.push(vAlumno);
        });
      }
    )
  }
}
