import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-add-ejercicios',
  templateUrl: './add-ejercicios.component.html',
  styleUrls: ['./add-ejercicios.component.css']
})
export class AddEjerciciosComponent implements OnInit {
  table: boolean;
  ejercicios: Ejercicio;
  idrutina: string;

  arraydeRutinas: Array<Rutina>;
  arraydeEjercicios: Array<Ejercicio>;
  constructor(private rutinaserv: RutinaService) {
    this.table = false;  
    this.ejercicios=new Ejercicio();
    this.cargarRutinas();
  }

  addEjerciciosRutina(){
    this.table = true;
    this.rutinaserv.addEjercicio(this.idrutina,this.ejercicios).subscribe(
      result=>{
        if(result.status=="1"){
          alert("Se agrego el ejercicio correctamente");
          this.cargarEjercicios(this.idrutina);
        }else{
          alert("Se produjo algun tipo de error")
        }
      }
    )
    this.ejercicios.descripcion="";
    this.ejercicios.zona="";
    this.ejercicios.repeticiones=null;
    this.ejercicios.intensidad="";
  }

  cargarEjercicios(idru: string){
    this.arraydeEjercicios=new Array<Ejercicio>();
    this.rutinaserv.getEjercicios(idru).subscribe(
      result=>{
        result.forEach(element => {
          let vEjercicio=new Ejercicio();
          Object.assign(vEjercicio,element);
          this.arraydeEjercicios.push(vEjercicio);
        });
      }
    )
    
  }

  cargarRutinas(){
    this.arraydeRutinas=new Array<Rutina>();
    this.rutinaserv.getRutinas().subscribe(
      result=>{
        result.forEach(element => {
          let vRutina=new Rutina();
          Object.assign(vRutina,element);
          this.arraydeRutinas.push(vRutina);
        });
      }
    )
  }

  deleteEjercicio(ide: string){
    this.rutinaserv.deleteEjercicio(this.idrutina,ide).subscribe(
      result=>{
        if(result.status=="1"){
          alert("se elimno correctamente")
          this.cargarEjercicios(this.idrutina);
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
