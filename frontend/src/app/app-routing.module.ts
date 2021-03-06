import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasComponent } from './components/alumno/asistencias/asistencias.component';
import { PagosComponent } from './components/alumno/pagos/pagos.component';
import { RutinasComponent } from './components/alumno/rutinas/rutinas.component';
import { AddEjerciciosComponent } from './components/entrenador/add-ejercicios/add-ejercicios.component';
import { AddRutinaAlumnoComponent } from './components/entrenador/add-rutina-alumno/add-rutina-alumno.component';
import { AgregarRegistroComponent } from './components/entrenador/agregar-registro/agregar-registro.component';
import { AnotarPagoComponent } from './components/entrenador/anotar-pago/anotar-pago.component';
import { AsistenciaComponent } from './components/entrenador/asistencia/asistencia.component';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { GestionarAlumnoComponent } from './components/entrenador/gestionar-alumno/gestionar-alumno.component';
import { MenuRutinaComponent } from './components/entrenador/menu-rutina/menu-rutina.component';
import { NuevaRutinaComponent } from './components/entrenador/nueva-rutina/nueva-rutina.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';
import { SeguimientoGeneralComponent } from './components/entrenador/seguimiento-general/seguimiento-general.component';
import { SeguimientoComponent } from './components/entrenador/seguimiento/seguimiento.component';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { VerRutinasComponent } from './components/entrenador/ver-rutinas/ver-rutinas.component';
import { ListaPagosComponent } from './components/entrenador/lista-pagos/lista-pagos.component';
import { ListaUsuariosComponent } from './components/entrenador/lista-usuarios/lista-usuarios.component';
import { ReciboComponent } from './components/entrenador/recibo/recibo.component';

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
  { path: 'entrenador/nuevo-alumno/:id', component: NuevoAlumnoComponent },
  { path: 'entrenador/nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'entrenador/rutina', component: MenuRutinaComponent },
  { path: 'entrenador/rutina/nueva-rutina', component: NuevaRutinaComponent },
  { path: 'entrenador/rutina/add-ejercicios', component: AddEjerciciosComponent },
  { path: 'entrenador/pagos/:id', component: AnotarPagoComponent },
  { path: 'entrenador/gestionar-alumno', component: GestionarAlumnoComponent},
  { path: 'entrenador/add-rutina-alumno/:id', component: AddRutinaAlumnoComponent},
  { path: 'entrenador/asistencia/:id', component: AsistenciaComponent },
  { path: 'entrenador/registro/:id', component: AgregarRegistroComponent },
  { path: 'entrenador/seguimiento/:id', component: SeguimientoComponent },
  { path: 'entrenador/seguimientogeneral', component: SeguimientoGeneralComponent },
  { path: 'public', component: PublicComponent },
  { path: 'entrenador/seguimientogeneral', component: SeguimientoGeneralComponent },
  { path: 'entrenador/verRutinas', component: VerRutinasComponent },
  { path: 'entrenador/rutina/add-ejercicios/:id', component: AddEjerciciosComponent },
  { path: 'entrenador/lista-pagos/:id', component: ListaPagosComponent },
  { path: 'entrenador/lista-usuarios', component: ListaUsuariosComponent},
  { path: 'tusPagos/:id', component: ReciboComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
