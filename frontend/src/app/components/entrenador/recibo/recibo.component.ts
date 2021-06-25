import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { jsPDF } from 'jspdf'
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  pago:Pago=new Pago();
  idPago:String;
  constructor(private alumnoserv:AlumnoService, private activated:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      params=>{
          this.idPago=params.id;
          console.log(this.idPago);
          this.getPago();
      }
    )
  }
  getPago(){
    this.alumnoserv.getPago(this.idPago).subscribe(
      result=>{
        Object.assign(this.pago,result);
        console.log(result);
      }
    );
  }
  pdf(){
    var canvas = document.getElementById('pdf');
    var fecha=Date.now();
    domtoimage.toPng(canvas).then((dataUrl)=>{
        let imagen= new Image();
        imagen.src=dataUrl;/*obtengo el screenshot*/
        let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
        pdf.addImage( imagen, 10, 10, 150,200); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
        pdf.save( 'comprobante'+fecha+'.pdf' ); /* descargamos el pdf con ese nombre.*/
    }
    );
}
goBack(){
  this.route.navigate(['tusPagos']);
}


}