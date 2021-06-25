import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import * as printJS from 'print-js'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  sectorJSON: JSON;
  totaldepagos: number=0;
  arraydePagos: Array<Pago>;
  pago: Pago;
  constructor(private alumnoserv: AlumnoService,  private router:Router) {
    this.cargarPagos();
   }

  ngOnInit(): void {
  }

  imprimirRecibo(){
    printJS({
      printable: this.sectorJSON,
      properties: ['monto', 'fechaPago', 'metodoPago'],
      type: 'json'
    })
  }
  irImprimir(id:string){
    this.router.navigate(["tusPagos/",id]);
  }

  cargarPagos(){
    this.arraydePagos= new Array<Pago>();
    this.alumnoserv.getPagos().subscribe(
      result=>{
        this.sectorJSON = result;
        result.forEach(element => {
          let vpago= new Pago();
          Object.assign(vpago,element);
          this.arraydePagos.push(vpago);
          this.totaldepagos++;
        });
      }
    )
  }
}
