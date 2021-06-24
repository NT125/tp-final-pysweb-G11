import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-add-rutina-alumno',
  templateUrl: './add-rutina-alumno.component.html',
  styleUrls: ['./add-rutina-alumno.component.css']
})
export class AddRutinaAlumnoComponent implements OnInit {

  idalumno: string;
  alumno: Alumno = new Alumno();
  idrutina: Rutina = new Rutina();
  arraydeRutinas: Array<Rutina>;
  bandera: boolean = false;
  arraydeRutinasAlumno: Array<Rutina>;
  arraydeEjercios: Array<Ejercicio>;
  constructor(private activatedroute: ActivatedRoute, private entrenadorserv: EntrenadorService, private rutinaserv: RutinaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params => {
        this.idalumno = params.id;
        this.cargarAlumno();
        this.cargarRutinas();
        this.cargarRutinasAlumno();
      }
    )
  }

  cargarAlumno() {
    this.entrenadorserv.getAlumno(this.idalumno).subscribe(
      result => {
        Object.assign(this.alumno, result);
      }
    )
  }

  cargarRutinas() {
    this.arraydeRutinas = new Array<Rutina>();
    this.rutinaserv.getRutinas().subscribe(
      result => {
        result.forEach(element => {
          let vRutina = new Rutina();
          Object.assign(vRutina, element);
          this.arraydeRutinas.push(vRutina);
        });
      }
    )
  }

  addRutina(rutinaForm: NgForm) {
    this.entrenadorserv.addRutina(this.idalumno, this.idrutina).subscribe(
      result => {
        if (result.status == "1") {
          this.toastr.success('Se agrego la rutina correctamente', ' ', {
            timeOut: 2000,
          });
          this.cargarRutinasAlumno();
        } else {
          this.toastr.error('Ocurrió un error al agregar', ' ', {
            timeOut: 2000,
          });          
        }
      }
    )
    rutinaForm.reset();
  }

  cargarRutinasAlumno() {
    this.arraydeRutinasAlumno = new Array<Rutina>();
    this.entrenadorserv.getRutinasAlumno(this.idalumno).subscribe(
      result => {
        result.forEach(element => {
          let vRutina = new Rutina();
          Object.assign(vRutina, element);
          this.arraydeRutinasAlumno.push(vRutina);
        });
      }
    )
    console.log(this.arraydeRutinasAlumno);
  }

  verEjercicios(id: string) {
    this.bandera = true;
    this.arraydeEjercios = new Array<Ejercicio>();
    this.rutinaserv.getEjercicios(id).subscribe(
      result => {
        result.forEach(element => {
          let vEjercicio = new Ejercicio();
          Object.assign(vEjercicio, element);
          this.arraydeEjercios.push(vEjercicio);
        });
      }
    )
  }

  cerrar() {
    this.bandera = false;
  }

  deleteRutina(indice: number) {
    this.entrenadorserv.deleteRutina(this.idalumno, indice).subscribe(
      result => {
        if (result.status == "1") {
          this.toastr.warning('Ejercicio rutina', ' ', {
            timeOut: 2000,
          });
          this.cargarRutinasAlumno();
        } else {
          this.toastr.error('Ocurrió un error al eliminar', ' ', {
            timeOut: 2000,
          });       
         }
      }
    )
  }
}
