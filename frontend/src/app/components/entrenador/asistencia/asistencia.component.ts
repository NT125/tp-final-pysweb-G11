import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private entrenadorserv: EntrenadorService, private activatedroute:ActivatedRoute, private toastr: ToastrService) { }

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
          this.toastr.success('Se agrego la asistencia correctamente', ' ', {
            timeOut: 2000,
          });
        }else{
          this.toastr.error('Ocurrió un error al agregar', ' ', {
            timeOut: 2000,
            });    
          }
      }
    )
      formPago.reset();
  }
}
