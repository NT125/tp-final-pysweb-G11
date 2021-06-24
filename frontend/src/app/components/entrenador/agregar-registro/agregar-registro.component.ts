import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private entrenadorserv: EntrenadorService, private activatedroute:ActivatedRoute) { 
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
          alert("Se agrego el registro");
        }else{
          alert("no se agregoxd");
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
          alert("Solo se permiten imagenes menores a 30kb")
          console.log(e[0])
        }
      }else{
        this.imagennoagregada=true;
        alert("No esta permitido este tipo de imagen")
        console.log(e[0])
      }
    }
  }

  agregarOtraImagen(imagen: string){
    if(this.arraydeImagenes.length<3){
      console.log("xd")
      this.arraydeImagenes.push(imagen);
      
    }else{
      alert("Maximo 3 Imagenes");
    }
   }
 
   eliminarImagen(index: number){
     if(index>=0 && index<=this.arraydeImagenes.length-1){
       this.arraydeImagenes.splice(index,1);
     }
   }

}
