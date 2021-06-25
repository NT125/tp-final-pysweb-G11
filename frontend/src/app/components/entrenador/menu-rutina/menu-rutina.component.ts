import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-rutina',
  templateUrl: './menu-rutina.component.html',
  styleUrls: ['./menu-rutina.component.css']
})
export class MenuRutinaComponent implements OnInit {

  constructor(private router: Router) { }

  //navegación para buttons u otros elementos que no sean <a>
  goNuevaRutina(){
    this.router.navigateByUrl("/entrenador/rutina/nueva-rutina");
  }

  goAddEjercicios(){
    this.router.navigateByUrl("/entrenador/verRutinas")
  }

  ngOnInit(): void {
  }

}
