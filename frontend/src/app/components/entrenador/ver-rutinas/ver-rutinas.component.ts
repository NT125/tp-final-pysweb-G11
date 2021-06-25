import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina } from 'src/app/models/rutina';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-ver-rutinas',
  templateUrl: './ver-rutinas.component.html',
  styleUrls: ['./ver-rutinas.component.css']
})
export class VerRutinasComponent implements OnInit {

  
  arrayRutina:Array<Rutina>;
  idrutina:String;
  constructor(private rutinaService:RutinaService, private route:Router) {
    this.cargarRutina();
   }

  cargarRutina(){
    this.arrayRutina=new Array<Rutina>();
    this.rutinaService.getRutinas().subscribe(
      result=>{
        result.forEach(element => {
          let vRutina=new Rutina();
          Object.assign(vRutina,element);
          this.arrayRutina.push(vRutina);
        });
      }
    )
  }
  irEjercicio(id:String){
    this.route.navigate(["entrenador/rutina/add-ejercicios/",id])
  }
  ngOnInit(): void {
    
  }
}
