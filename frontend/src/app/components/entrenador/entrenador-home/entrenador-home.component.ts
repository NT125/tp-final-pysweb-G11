import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenador-home',
  templateUrl: './entrenador-home.component.html',
  styleUrls: ['./entrenador-home.component.css']
})
export class EntrenadorHomeComponent implements OnInit {

  constructor(private router: Router) {

  }


  //navegación
  goNuevoAlumno(){
    this.router.navigate(['/entrenador/nuevo-alumno']);
  }

  /*
  goNuevoUsuario(){
    this.router.navigate(['/entrenador/nuevo-usuario']);
  }

  goNuevoAlumno(){
    this.router.navigate(['/entrenador/nuevo-alumno']);
  }
  */
  ngOnInit(): void {
  }

}
