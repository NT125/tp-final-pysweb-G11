import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.css']
})
export class ListaPagosComponent implements OnInit {

  idalumno: string;
  arraydePagos: Array<Pago>;
  alumno: Alumno=new Alumno();
  constructor(private activatedroute:ActivatedRoute,private entrenadorserv: EntrenadorService) { }

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
        this.cargarPagos();
      }
    )
  }

  cargarPagos(){
    console.log(this.alumno.pago);
    this.arraydePagos=new Array<Pago>();
    this.alumno.pago.forEach(element => {
      let vPago=new Pago();
      Object.assign(vPago,element);
      this.arraydePagos.push(vPago);
    });
  }

  imprimirPago(idPago: number){

  }

}
