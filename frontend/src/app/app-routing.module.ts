import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';
import { PagosComponent } from './components/alumno/pagos/pagos.component';
import { RutinasComponent } from './components/alumno/rutinas/rutinas.component';
import { AddEjerciciosComponent } from './components/entrenador/add-ejercicios/add-ejercicios.component';
import { AnotarPagoComponent } from './components/entrenador/anotar-pago/anotar-pago.component';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { GestionarAlumnoComponent } from './components/entrenador/gestionar-alumno/gestionar-alumno.component';
import { MenuRutinaComponent } from './components/entrenador/menu-rutina/menu-rutina.component';
import { NuevaRutinaComponent } from './components/entrenador/nueva-rutina/nueva-rutina.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent } ,
  { path: 'login', component: LoginComponent }, 

  //rutas alumno
  { path: 'tusAsistencias', component: AsistenciasComponent },
  { path: 'tusRutinas', component: RutinasComponent },
  { path: 'tusPagos', component: PagosComponent },

  //rutas entrenador
  { path: 'entrenador', component: EntrenadorHomeComponent }, 
  { path: 'entrenador/nuevo-alumno', component: NuevoAlumnoComponent },
  { path: 'entrenador/nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'entrenador/rutina', component: MenuRutinaComponent },
  { path: 'entrenador/rutina/nueva-rutina', component: NuevaRutinaComponent },
  { path: 'entrenador/rutina/add-ejercicios', component: AddEjerciciosComponent },
  { path: 'entrenador/pagos/:id', component: AnotarPagoComponent },
  { path: 'entrenador/gestionar-alumno', component: GestionarAlumnoComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
