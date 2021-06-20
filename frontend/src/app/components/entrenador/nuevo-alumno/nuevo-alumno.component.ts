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

  createAlumno() {  }


  ngOnInit(): void {}
}
