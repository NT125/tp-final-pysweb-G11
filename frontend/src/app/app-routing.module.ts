import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';
import { PagosComponent } from './components/alumno/pagos/pagos.component';
import { RutinasComponent } from './components/alumno/rutinas/rutinas.component';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/entrenador', pathMatch: 'full' },

  { path: 'tusAsistencias', component: AsistenciasComponent },
  { path: 'tusRutinas', component: RutinasComponent },
  { path: 'tusPagos', component: PagosComponent },
  {path: 'login', component: LoginComponent}, 
  { path: 'entrenador', component: EntrenadorHomeComponent }, 
  { path: 'entrenador/nuevo-alumno', component: NuevoAlumnoComponent },
  { path: 'entrenador/nuevo-usuario', component: NuevoUsuarioComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
