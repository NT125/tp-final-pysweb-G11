import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private entrenadorserv: EntrenadorService,private route: Router, private activatedroute:ActivatedRoute, private toastr: ToastrService) { }

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

  verListaPagos(){
    this.route.navigate(["entrenador/lista-pagos/",this.idalumno])
  }

  addPago(formPago: NgForm){
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    this.pago.fechaPago=hoy.toLocaleDateString();
    this.entrenadorserv.addPago(this.idalumno,this.pago).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success('Se agrego el pago correctamente', ' ', {
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
