import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Usuario } from 'src/app/models/usuario';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idalumno: string;
  arraydeAlumnos: Array<Alumno>;
  constructor(private router: Router,private entrenadorserv:EntrenadorService) {
    this.usuario = new Usuario();
    this.cargarAlumnos();
  }

  ngOnInit(): void {
  }

  cargarAlumnos(){
    this.arraydeAlumnos=new Array<Alumno>();
    this.entrenadorserv.getAlumnosSinCuenta().subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno=new Alumno();
          Object.assign(vAlumno,element);
          this.arraydeAlumnos.push(vAlumno);
        });
      }
    )
  } 

  createUsuario(nuevousuario: NgForm){
    console.log(this.usuario);
    console.log(this.idalumno);
    this.entrenadorserv.addUsuario(this.usuario,this.idalumno).subscribe(
      result=>{
        if(result.status=="1"){
          alert("Se creo Correctamente");
          
        }else if(result.status=="2"){
          alert("Elija otro Nombre de Usuario, Este ya existe")
        }else{
          alert("Este alumno ya posee un usuario")
        }
        this.cargarAlumnos();
      }
    )
    console.log(this.usuario);
    nuevousuario.reset();
  }
  
  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

}
