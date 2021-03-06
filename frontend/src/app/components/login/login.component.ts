import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  msglogin: string;

  passwd: boolean;

  constructor(private loginserv: LoginService,private router:Router,private route:ActivatedRoute, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login(){
    this.loginserv.login(this.username,this.password).subscribe(  
      (result) => {
        this.msglogin = "";
        var user = result;
        if (user.status == 1) {
          //guardamos el user en cookies en el cliente
          sessionStorage.setItem("user", user.username);
          sessionStorage.setItem("userid", user.userid);
          sessionStorage.setItem("perfil", user.perfil.nombre);
          sessionStorage.setItem("token", user.token);
          sessionStorage.setItem("fotoperfil", user.fotoperfil);
          if(user.perfil.nombre=="alumno"){
            sessionStorage.setItem("idalumno", user.idalumno._id);
            this.router.navigateByUrl('/tusAsistencias');
          }
          if(user.perfil.nombre=="entrenador"){
            this.router.navigateByUrl('/entrenador');
          }
        } else {
          //usuario no encontrado muestro mensaje en la vista
          console.log(user.status);
          this.msglogin = "Usuario y/o contraseña incorrectos"
        }
      },
      error => {
        this.toastr.error('Error de conexion', ' ', {
            timeOut: 2000,
          });
        console.log(error);
      });
       
  }
  
  showHidePwd(){
    this.passwd = !this.passwd;
    console.log(this.passwd)
  }

}
