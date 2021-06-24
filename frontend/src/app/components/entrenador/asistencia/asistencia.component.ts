import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  alumno: Alumno=new Alumno();
  idalumno: string;
  asistencia: Asistencia=new Asistencia();
  constructor(private entrenadorserv: EntrenadorService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params=>{
          this.idalumno=params.id;
          this.cargarAlumno()
      }
    )
  }

  cargarAlumno(){
    this.entrenadorserv.getAlumno(this.idalumno).subscribe(
      result=>{
        Object.assign(this.alumno,result);
      }
    )
  }

  addAsistencia(formPago: NgForm){
    this.entrenadorserv.addAsistencia(this.idalumno,this.asistencia).subscribe(
      result=>{
        if(result.status=="1"){
          alert("Se agrego la asistencia");
        }else{
          alert("no se agregoxd");
        }
      }
    )
      formPago.reset();
  }
}
