import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Registro } from 'src/app/models/registro';
import { EntrenadorService } from 'src/app/services/entrenador.service';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})
export class AgregarRegistroComponent implements OnInit {

  arraydeImagenes: Array<String>;
  imagennoagregada:boolean=true;
  alumno: Alumno=new Alumno();
  idalumno: string;
  vregistro: Registro=new Registro();
  constructor(private entrenadorserv: EntrenadorService, private activatedroute:ActivatedRoute, private toastr: ToastrService) { 
    this.arraydeImagenes=new Array<String>();
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params=>{
          this.idalumno=params.id;
          this.cargarAlumno()
      }
    )
  }

  cargarAlumno(){
    this.entrenadorserv.getAlumno(this.idalumno).subscribe(
      result=>{
        Object.assign(this.alumno,result);
      }
    )
  }

  addRegistro(formPago: NgForm){
    this.vregistro.imagenes=this.arraydeImagenes;
    console.log(this.vregistro);
    this.entrenadorserv.addRegistro(this.idalumno,this.vregistro).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success('Se agrego el registro correctamente', ' ', {
            timeOut: 2000,
          });        
        }else{
          this.toastr.error('Ocurrió un error al agregar', ' ', {
            timeOut: 2000,
          });          
        }
      }
    )
      this.arraydeImagenes=null;
      formPago.reset();
  }

  onFileChanged(e){
    this.vregistro.imagenes=null;
    if(e[0]==null){
      this.imagennoagregada=true;
    }else{
      if(/.(gif|jpeg|jpg|png|webp)$/i.test(e[0].name)){
        if(e[0].size<30000){
          this.agregarOtraImagen(e[0].base64);
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

  agregarOtraImagen(imagen: string){
    if(this.arraydeImagenes.length<3){
      this.arraydeImagenes.push(imagen);
    }else{
      this.toastr.error('Solo se permiten 3 imagenes como maximo', ' ', {
        timeOut: 2000,
      });  
    }
   }
 
   eliminarImagen(index: number){
     if(index>=0 && index<=this.arraydeImagenes.length-1){
       this.arraydeImagenes.splice(index,1);
       this.toastr.warning('Imagen eliminada', ' ', {
        timeOut: 2000,
      });
     }
   }
}
