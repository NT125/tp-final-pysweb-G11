import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';
import { AlumnoHeaderComponent } from './components/alumno/alumno-header/alumno-header.component';
import { RutinasComponent } from './components/alumno/rutinas/rutinas.component';
import { PagosComponent } from './components/alumno/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
//import { LoginService } from './services/login.service';
import { FormControl, FormsModule } from '@angular/forms';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { EntrenadorHeaderComponent } from './components/entrenador/entrenador-header/entrenador-header.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';
import { LoginService } from './services/login.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    EntrenadorHomeComponent,
    EntrenadorHeaderComponent,
    NuevoAlumnoComponent,
    AsistenciasComponent,
    AlumnoHeaderComponent,
    RutinasComponent,
    PagosComponent,
    LoginComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
