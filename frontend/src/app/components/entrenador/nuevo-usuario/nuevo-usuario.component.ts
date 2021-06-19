import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  createUsuario(){
    console.log(this.usuario);
  }
  
  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

}
