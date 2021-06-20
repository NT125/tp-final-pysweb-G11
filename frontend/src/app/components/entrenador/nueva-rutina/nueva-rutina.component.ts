import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-nueva-rutina',
  templateUrl: './nueva-rutina.component.html',
  styleUrls: ['./nueva-rutina.component.css']
})
export class NuevaRutinaComponent implements OnInit {
  table: boolean;

  ejercicio: Ejercicio;
  ejercicios: Array<Ejercicio>;

  rutina: Rutina = new Rutina();
  ejerciciosRutina: Array<Ejercicio>;

  constructor(
    private ejercicioService: EjercicioService,
    private rutinaService: RutinaService
  ) {
    this.table = false;
    this.ejerciciosRutina = new Array<Ejercicio>();

    this.ejercicios = new Array<Ejercicio>();
    this.getEjercicios();
    console.log(this.ejercicios)
  }

  addEjerciciosRutina() {
    this.table = true;
    this.ejerciciosRutina.push(this.ejercicio);
  }

  deleteEjerciciosRutina() {
    console.log(this.ejerciciosRutina)
  }

  checkNivel() {
    console.log(this.rutina.nivel)
  }

  createRutina() {
    this.rutinaService.createRutina(this.ejerciciosRutina, this.rutina.nivel).subscribe(
      (result) => {
        this.rutina = new Rutina();
        alert(result.msg);
        console.log(this.rutina);
        this.ejerciciosRutina = new Array<Ejercicio>();
        this.table = false;
      },
      (error) => {
        alert(error.msg);
      }
    )
  }

  getEjercicios() {
    this.ejercicioService.getEjercicios().subscribe(
      (result) => {
        (result).forEach((element) => {
          this.ejercicio = new Ejercicio();
          Object.assign(this.ejercicio, element);
          this.ejercicios.push(this.ejercicio);
        });
      },
      (error) => {
        alert(error.msg);
      }
    )
  }

  ngOnInit(): void {
  }

}
