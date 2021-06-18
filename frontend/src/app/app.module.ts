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
import { EntrenadorHeaderComponent } from './components/entrenador/entrenador-header/entrenador-header.component';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';

import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeComponent,
    AsistenciasComponent,
    AlumnoHeaderComponent,
    RutinasComponent,
    PagosComponent,
    EntrenadorHeaderComponent,
    EntrenadorHomeComponent,
    NuevoAlumnoComponent,
    NuevoUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
