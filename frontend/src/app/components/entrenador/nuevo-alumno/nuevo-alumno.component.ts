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
  horario:String;
  tipoPlan: String;

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
    console.log(this.alumno);
    console.log(this.horario);
    this.entrenadorserv.addAlumno(this.alumno).subscribe(
        (result) => {
          this.toastr.success('Alumno inscripto', ' ', {
            timeOut: 2000,
          });
          console.log(this.alumno);
      },
        (error)=>{
          alert(error.msg);
      }
    );
    nuevoalumno.reset();
  }

  //navegación
  goBack() {
    this.router.navigate(['/entrenador']);
  }

  ngOnInit(): void {}
}
