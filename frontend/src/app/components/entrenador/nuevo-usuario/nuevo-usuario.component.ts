import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  imagennoagregada:boolean=true;

  constructor(private router: Router,private entrenadorserv:EntrenadorService, private toastr: ToastrService) {
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
    this.usuario.estado=true;
    this.entrenadorserv.addUsuario(this.usuario,this.idalumno).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success('Se agrego el usuario correctamente', ' ', {
            timeOut: 2000,
          });          
        }else if(result.status=="2"){
          this.toastr.warning('Este nombre de usuario ya existe', ' ', {
            timeOut: 2000,
          });       
         }else{
          this.toastr.warning('Este alumno ya posee un usuario', ' ', {
            timeOut: 2000,
          });
        }
        this.cargarAlumnos();
      }
    )
    console.log(this.usuario);
    nuevousuario.reset();
  }
  
  onFileChanged(e){
    this.usuario.fotoperfil=null;
    if(e[0]==null){
      this.imagennoagregada=true;
    }else{
      if(/.(gif|jpeg|jpg|png|webp)$/i.test(e[0].name)){
        if(e[0].size<30000){
          this.usuario.fotoperfil=e[0].base64;
         this.imagennoagregada=false;
          console.log(e[0])
        }else{
          this.imagennoagregada=true;
          this.toastr.error('Solo se permiten imagenes menores a 30kb', 'Error ', {
            timeOut: 2000,
            });   
          console.log(e[0])
        }
      }else{
        this.imagennoagregada=true;
        this.toastr.error('No esta permitido este tipo de imagen', 'Error ', {
          timeOut: 2000,
          }); 
        console.log(e[0])
      }
    }
  }

  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

}
