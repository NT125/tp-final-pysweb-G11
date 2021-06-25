
  import { Component, OnInit } from '@angular/core';
  import { AlumnoService } from 'src/app/services/alumno.service';
  
  @Component({
    selector: 'app-seguimiento-general',
    templateUrl: './seguimiento-general.component.html',
    styleUrls: ['./seguimiento-general.component.css']
  })
  export class SeguimientoGeneralComponent implements OnInit {
  
    
  
     //Grafico2
     title2 = 'Fecha Inicio';  
     type2 = 'ColumnChart';   
     data2=([]);
     
     columnNames = ['Alumno', 1];  
     width2 = 1000;  
     height2 = 600;
    arrayNumber:Array<Number>=new Array<Number>();
    constructor(private alumnoserv: AlumnoService) {
      this.cargarFechas();
    }
  
    ngOnInit(): void {
    }
  
    cargarFechas(){
      let xfecha: Date;
      this.arrayNumber= new Array<Number>();
    
      this.alumnoserv.getAlumnos().subscribe(
        result=>{
          result.forEach(element => {
          
        
            xfecha=new Date(element.fecha_inicio);
            xfecha.setDate(xfecha.getDate()+1);
            this.arrayNumber.push(xfecha.getMonth()+1);
            
          });
          
          this.contarFechaInicio();
        }
      )
  
    }  
  
    contarFechaInicio(){
      let ce=0;
      let fc=0;
      let mc=0;
      let ac=0;
      let myc=0;
      let ju=0;
      let jl=0;
      let ago=0;
      let sep=0;
      let oc=0;
      let nov=0;
      let dc=0;
      console.log(this.arrayNumber);
      this.arrayNumber=this.arrayNumber.sort();
      this.arrayNumber.forEach(element => {
       
       /* if(this.fechadesde <= element && this.fechahasta <= element){
          this.arraydeFechasBuscadas.push(element);
        }*/
        switch (element){
          case 1: ce++
          break;
          case 2: fc++
          break;
          case 3: mc++
          break;
          case 4: ac++
          break;
          case 5: myc++
          break;
          case 6: ju++
          break;
          case 7: jl++
          break;
          case 8: ago++
          break;
          case 9: sep++
          break;
          case 10: oc++
          break
          case 11: nov++
          break;
          case 12: dc++
          break;
        }
      });
    
      this.data2 = ([ 
        ["Enero", ce],
        ["Febrero", fc],
        ["Marzo", mc],
        ["Abril", ac],
        ["Mayo", myc],
        ["Junio", ju],
        ["Julio", jl],
        ["Agosto", ago],
        ["Septiembre", sep],
        ["Octubre", oc],
        ["Noviembre", nov],
        ["Diciembre", dc]
      ])
    }
    
  }