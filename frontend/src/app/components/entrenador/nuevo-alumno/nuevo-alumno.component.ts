import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css'],
})
export class NuevoAlumnoComponent implements OnInit {
  plan: Plan = new Plan();
  alumno: Alumno = new Alumno();

  tipoPlan: String;

  constructor(private alumnoService: AlumnoService, private router: Router) {
    this.alumno = new Alumno();
    this.tipoPlan = "b";
  }

  createAlumno() {
    console.log(this.alumno)
    this.alumno = new Alumno();
    this.alumnoService
      .createAlumno(
        this.alumno.apellido,
        this.alumno.nombre,
        this.alumno.nro_documento,
        this.alumno.fecha_nacimiento,
        this.alumno.celular,
        this.alumno.fecha_inicio,
        this.alumno.domicilio,
        this.alumno.email
      )
      .subscribe(
        (result) => {
          alert(result.msg);
          console.log(this.alumno);
      },
        (error)=>{
          alert(error.msg);
      }
    );
  }

  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

  ngOnInit(): void {}
}
