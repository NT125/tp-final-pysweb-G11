import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { AlumnoService } from 'src/app/services/alumno.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  bandera: boolean=false;
  rutina: Rutina;
  idRutina: string;
  arraydeEjercicios: Array<Ejercicio>;
  arraydeRutinas: Array<Rutina>;
  constructor(private alumnoserv: AlumnoService,private rutinaserv: RutinaService) {
    this.cargarRutinas();
   }

  ngOnInit(): void {
  }

  cargarRutinas(){
    this.arraydeRutinas=new Array<Rutina>();
    this.alumnoserv.getRutinas().subscribe(
      result=>{
        result.forEach(element => {
          let vRutina= new Rutina();
          Object.assign(vRutina,element);
          this.arraydeRutinas.push(vRutina)
        });
      }
    )
    console.log(this.arraydeRutinas);
  }

  verEjercicio(idr: string){
    this.idRutina=idr;
    this.bandera=true;
    this.cargarEjercicios();
  }

  cargarEjercicios(){
    this.arraydeEjercicios=new Array<Ejercicio>();
    console.log(this.idRutina);
    this.rutinaserv.getEjercicios(this.idRutina).subscribe(
      result=>{
        result.forEach(element => {
          let vEjercicio= new Ejercicio();
          Object.assign(vEjercicio,element);
          this.arraydeEjercicios.push(vEjercicio);
        });
      }
    )
    console.log(this.arraydeEjercicios);
  }

}
