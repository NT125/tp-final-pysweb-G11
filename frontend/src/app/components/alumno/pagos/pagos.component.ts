import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  totaldepagos: number=0;
  arraydePagos: Array<Pago>;
  pago: Pago;
  constructor(private alumnoserv: AlumnoService) {
    this.cargarPagos();
   }

  ngOnInit(): void {
  }

  cargarPagos(){
    this.arraydePagos= new Array<Pago>();
    this.alumnoserv.getPagos().subscribe(
      result=>{
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
