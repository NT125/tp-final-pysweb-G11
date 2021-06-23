import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-anotar-pago',
  templateUrl: './anotar-pago.component.html',
  styleUrls: ['./anotar-pago.component.css']
})
export class AnotarPagoComponent implements OnInit {

  nose:string;
  alumno: Alumno=new Alumno();
  idalumno: string;
  pago: Pago=new Pago;
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

  addPago(formPago: NgForm){
    this.entrenadorserv.addPago(this.idalumno,this.pago).subscribe(
      result=>{
        if(result.status=="1"){
          alert("Se agrego el pago");
        }else{
          alert("no se agregoxd");
        }
      }
    )
      formPago.reset();
  }

}
