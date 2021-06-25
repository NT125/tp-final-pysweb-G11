import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  rutina:Rutina=new Rutina();
  
  arraydeEjercicios: Array<Ejercicio>;
  constructor(private rutinaserv: RutinaService, private toastr: ToastrService, private activedroute:ActivatedRoute) {
    this.table = true;  
    this.ejercicios=new Ejercicio();
  
  }

  addEjerciciosRutina(){
    this.table = true;
    this.rutinaserv.addEjercicio(this.idrutina,this.ejercicios).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success('Se agrego el ejercicio correctamente', ' ', {
            timeOut: 2000,
          });
          this.cargarEjercicios();
        }else{
          this.toastr.error('Ocurrió un error al agregar', ' ', {
          timeOut: 2000,
          });        
        }
      }
    )
    this.ejercicios.descripcion="";
    this.ejercicios.zona="";
    this.ejercicios.repeticiones=null;
    this.ejercicios.intensidad="";
  }

  cargarEjercicios(){
    this.arraydeEjercicios=new Array<Ejercicio>();
    this.rutinaserv.getEjercicios(this.idrutina).subscribe(
      result=>{
        result.forEach(element => {
          let vEjercicio=new Ejercicio();
          Object.assign(vEjercicio,element);
          this.arraydeEjercicios.push(vEjercicio);
        });
      }
    )
    
  }

  getRutina() {
    console.log("piol")
    this.rutinaserv.getRutina(this.idrutina).subscribe(
        result=>{
          Object.assign(this.rutina,result);
          console.log(this.rutina)
        }
        
    )
  }

  deleteEjercicio(ide: string){
    this.rutinaserv.deleteEjercicio(this.idrutina,ide).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.warning('Ejercicio eliminado', ' ', {
            timeOut: 2000,
          });
          this.cargarEjercicios();
        }
      }
    )
  }

  ngOnInit(): void {
    this.activedroute.params.subscribe(
      params=>{
          this.idrutina=params.id;
          console.log(this.idrutina);
          this.getRutina();
          this.cargarEjercicios();
      }
    )
  }

}
