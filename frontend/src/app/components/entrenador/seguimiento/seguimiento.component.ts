import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  //Grafico1
  title = 'Asistencia';  
  type = 'PieChart';   
  data=([]);
  columnNames = ['Name', 'Percentage'];  
  width = 600;  
  height = 300;

  //Grafico2
  title2 = 'Fecha Inicio';  
  type2 = 'PieChart';   
  data2=([]);
  columnNames2 = ['Name', 'Percentage'];  
  width2 = 600;  
  height2 = 300;


  alumno: Alumno=new Alumno();
  idalumno: string;
  constructor(private activatedroute: ActivatedRoute,private entrenadorserv:EntrenadorService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params=>{
          this.idalumno=params.id;
          this.cargarAlumno();         
      }
    )
  }

  
  cargarAlumno(){
    let contadora=0;
    let contadori=0;
    let pa=0;
    let nopa=0;
    this.entrenadorserv.getAlumno(this.idalumno).subscribe(
      result=>{
        console.log(result)
        Object.assign(this.alumno,result);
        this.alumno.asistencia.forEach(element => {
          if(element.asistio==true){
            contadora++;
          }else{
            contadori++;
          }
        });
       this.alumno.pago.forEach(element => {
          if(element.completo==true){
              pa++;
          }else{
            nopa++;
          }
       }); 
        this.cambiarGraficoA(contadora,contadori);
        this.cambiarGraficoP(pa,nopa);
      }
    )
  }

  cambiarGraficoA(a: number, i: number){
    this.data=([
      ["Asistencia", a],
      ["Inasistencia", i]
    ]);
  }
   
  cambiarGraficoP(p: number,n: number ){
    this.data2=([
      ["Pagodo", p],
      ["No Pagado", n]
    ]);
  }

}
