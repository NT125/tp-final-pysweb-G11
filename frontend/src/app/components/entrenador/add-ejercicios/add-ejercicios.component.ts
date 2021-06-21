import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-add-ejercicios',
  templateUrl: './add-ejercicios.component.html',
  styleUrls: ['./add-ejercicios.component.css']
})
export class AddEjerciciosComponent implements OnInit {
  table: boolean;

  ejercicios: Array<any>;
  ejerciciosRutina: Array<any>;

  constructor(
  ) {
    this.ejercicios = new Array<any>();
    this.table = false;
    this.ejerciciosRutina = new Array<any>();
    console.log(this.ejercicios)
  }


  //están bugueadas estas funciones, andaban bien con el ejercicioService
  addEjerciciosRutina() {
    console.log(this.ejercicios);
    this.ejerciciosRutina.push(this.ejercicios);
    this.ejercicios = new Array<any>();
    this.table = true;
  }

  deleteEjercicioRutina(index){
    this.ejerciciosRutina.splice(index,1);
  }

  showEjerciciosRutina() {
    console.log(this.ejerciciosRutina);
  }

  ngOnInit(): void {
  }

}
