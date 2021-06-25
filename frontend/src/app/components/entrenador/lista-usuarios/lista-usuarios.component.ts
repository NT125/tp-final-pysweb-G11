import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  bandera: boolean=false;
  arraydeUsuarios: Array<Usuario>;
  constructor(private usuarioser: UsuarioService) { 
    this.cargarUsuarios();
  }

  ngOnInit(): void {
  }

  cargarUsuarios(){
    this.arraydeUsuarios=new Array<Usuario>();
    this.usuarioser.getUsuarios().subscribe(
      result=>{
        result.forEach(element => {
          let vUsuario= new Usuario();
          Object.assign(vUsuario,element);
          this.arraydeUsuarios.push(vUsuario);
        });
      }
    )
    console.log(this.arraydeUsuarios);
  }

}
