import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumno.service';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css'],
})
export class NuevoAlumnoComponent implements OnInit {
  plan: Plan = new Plan();
  alumno: Alumno = new Alumno();
  
  horario:Array<String>= new Array<String>();
  tipoPlan: String;
  lun:Boolean=false;mar:Boolean=false;mie:Boolean=false;jue:Boolean=false;vie:Boolean=false;sab:Boolean=false;
  aprobado:Boolean;
  arraydePlanes: Array<Plan>;
  constructor(private entrenadorserv: EntrenadorService,private planserv: PlanService, private router: Router,private toastr: ToastrService) {
    this.alumno = new Alumno();    
  
    this.cargarPlanes();
  }

  cargarPlanes(){
    this.arraydePlanes=new Array<Plan>();
    this.planserv.getPlanes().subscribe(
      result=>{
        result.forEach(element => {
          let vPlan= new Plan();
          Object.assign(vPlan,element);
          this.arraydePlanes.push(vPlan);
        });
      }
    )
  }

  createAlumno(nuevoalumno: NgForm) {
   this.horario= new Array<String>();
    this.asignarHorario();
    if(this.aprobado)
    {
      this.alumno.horario=this.horario;
      this.entrenadorserv.addAlumno(this.alumno).subscribe(
          (result) => {
            if(result.status=="1"){
              this.toastr.success('Alumno inscripto', ' ', {
                timeOut: 2000,
              });
            }
            else
            {
              this.toastr.error('Error de inscripcion', ' ', {
                timeOut: 2000,
              });
            }
        },
          (error)=>{
            alert(error.msg);
        }
      );
      nuevoalumno.reset();
    }
    else{
      this.toastr.error('Malas fechas', ' ', {
        timeOut: 2000,
      });
    }
 
  }
  
  asignarHorario(){
    
      if(this.lun==true)
    {
      this.horario.push("Lunes");
    }
    if(this.mar==true)
    {
      this.horario.push("Martes");
    }
    if(this.mie==true)
    {
      this.horario.push("Miercoles");
    }
    if(this.jue==true)
    {
      this.horario.push("Jueves");
    }
    if(this.vie==true)
    {
      this.horario.push("Viernes");
    }
    if(this.sab==true)
    {
      this.horario.push("Sabado");
    }
    
    
  
    if(this.horario.length==this.alumno.plan.cantidadDias){
      this.aprobado=true;
    }
    else{
      console.log("cagaste");
      this.aprobado=false;
      this.horario= new Array<String>();
    }
  }

  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

  ngOnInit(): void {}
}
