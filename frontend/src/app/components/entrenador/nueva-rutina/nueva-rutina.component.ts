import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-nueva-rutina',
  templateUrl: './nueva-rutina.component.html',
  styleUrls: ['./nueva-rutina.component.css']
})
export class NuevaRutinaComponent implements OnInit {

  rutina: Rutina;
  
  constructor(private rutinaserv: RutinaService, private toastr: ToastrService){
    this.rutina=new Rutina();
  }

  createRutina(newRutina: NgForm) {
    this.rutinaserv.addRutina(this.rutina).subscribe(
      result=>{
        if(result.status=="1"){
          this.rutina = new Rutina()
          this.toastr.success('Se agrego la rutina correctamente', ' ', {
            timeOut: 2000,
          });
        }else{  
          this.toastr.error('Ocurrió un error al agregar', ' ', {
            timeOut: 2000,
          });
        }
      }
    )
      newRutina.reset()
  }

  ngOnInit(): void {
  }

}
