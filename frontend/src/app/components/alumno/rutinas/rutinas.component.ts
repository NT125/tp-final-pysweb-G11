import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/models/rutina';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  rutina: Rutina;
  arraydeRutinas: Array<Rutina>;
  constructor(private alumnoserv: AlumnoService) {
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
}
