import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {

  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['/entrenador'])
  }

  ngOnInit(): void {
  }

}
