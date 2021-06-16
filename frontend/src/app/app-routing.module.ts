import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';

const routes: Routes = [
  { path: 'tusAsistencias', component: AsistenciasComponent }
  //{ path: 'tusRutinas', component: RutinasComponent },
  //{ path: 'tusPagos', component: PagosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
