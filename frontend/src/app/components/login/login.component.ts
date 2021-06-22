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
  returnUrl: string='/entrenador';
  msglogin: string;
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
        console.log(user.status);
        if (user.status == 1) {
          //guardamos el user en cookies en el cliente
          sessionStorage.setItem("user", user.username);
          sessionStorage.setItem("userid", user.userid);
          sessionStorage.setItem("perfil", user.perfil.nombre);
          sessionStorage.setItem("token", user.token);
          sessionStorage.setItem("idalumno", user.idalumno._id);
          //redirigimos a home o a pagina que llamo
          this.router.navigateByUrl(this.returnUrl);
        } else {
          //usuario no encontrado muestro mensaje en la vista
          console.log(user.status);
          this.toastr.error('Usuario y/o contraseña incorrectos', ' ', {
            timeOut: 2000,
          });
        }
      },
      error => {
        this.toastr.error('Error de conexion', ' ', {
            timeOut: 2000,
          });
        console.log(error);
      });
       
  }
  
}
