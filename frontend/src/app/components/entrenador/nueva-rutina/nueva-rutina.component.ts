import { Component, OnInit } from '@angular/core';
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
  
  constructor(private rutinaserv: RutinaService){
    this.rutina=new Rutina();
  }

  createRutina() {
    this.rutinaserv.addRutina(this.rutina).subscribe(
      result=>{
        if(result.status=="1"){
          alert("Se agrego la rutina Correctamente")
        }else{
          alert("Se produjo algun error")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
