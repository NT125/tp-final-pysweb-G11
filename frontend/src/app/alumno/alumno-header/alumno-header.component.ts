import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-header',
  templateUrl: './alumno-header.component.html',
  styleUrls: ['./alumno-header.component.css']
})
export class AlumnoHeaderComponent implements OnInit {
  tabAsist: boolean;
  tabRutina: boolean;
  tabPago:boolean;

  constructor() {
    this.tabAsist = true;
    this.tabRutina = false;
    this.tabPago = false;
  }

  clickAsist(){
    this.tabAsist = true;
    this.tabRutina = false;
    this.tabPago = false;
  }

  clickRutina(){
    this.tabAsist = false;
    this.tabRutina = true;
    this.tabPago = false;
  }

  clickPago(){
    this.tabAsist = false;
    this.tabRutina = false;
    this.tabPago = true;
  }

  ngOnInit(): void {
  }

}
