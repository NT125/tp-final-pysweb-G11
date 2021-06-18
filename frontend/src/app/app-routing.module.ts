import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';
import { PagosComponent } from './components/alumno/pagos/pagos.component';
import { RutinasComponent } from './components/alumno/rutinas/rutinas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'tusAsistencias', component: AsistenciasComponent },
  { path: 'tusRutinas', component: RutinasComponent },
  { path: 'tusPagos', component: PagosComponent },
  {path: 'login', component: LoginComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
