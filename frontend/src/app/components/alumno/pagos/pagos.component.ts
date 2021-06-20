import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/models/pago';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  totaldepagos: number=0;
  arraydePagos: Array<Pago>;
  pago: Pago;
  constructor(private pagoserv: PagoService) {
    this.cargarPagos();
   }

  ngOnInit(): void {
  }

  cargarPagos(){
    this.arraydePagos= new Array<Pago>();
    this.pagoserv.getPagos().subscribe(
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
