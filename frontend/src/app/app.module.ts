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
import { FormControl, FormsModule } from '@angular/forms';
import { EntrenadorHomeComponent } from './components/entrenador/entrenador-home/entrenador-home.component';
import { EntrenadorHeaderComponent } from './components/entrenador/entrenador-header/entrenador-header.component';
import { NuevoAlumnoComponent } from './components/entrenador/nuevo-alumno/nuevo-alumno.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NuevoUsuarioComponent } from './components/entrenador/nuevo-usuario/nuevo-usuario.component';
import { LoginService } from './services/login.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NuevaRutinaComponent } from './components/entrenador/nueva-rutina/nueva-rutina.component';
import { MenuRutinaComponent } from './components/entrenador/menu-rutina/menu-rutina.component';
import { AddEjerciciosComponent } from './components/entrenador/add-ejercicios/add-ejercicios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { FacebookModule } from 'ngx-fb';
import { PublicComponent } from './components/public/public.component';
import { AnotarPagoComponent } from './components/entrenador/anotar-pago/anotar-pago.component';
import { GestionarAlumnoComponent } from './components/entrenador/gestionar-alumno/gestionar-alumno.component';
import { AddRutinaAlumnoComponent } from './components/entrenador/add-rutina-alumno/add-rutina-alumno.component';
import { AsistenciaComponent } from './components/entrenador/asistencia/asistencia.component';
import { AgregarRegistroComponent } from './components/entrenador/agregar-registro/agregar-registro.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ContarPalabra, DirectivesDirective, SinMayuscula, SoloNumeros, VerificarFechaIn, VerificarFechaNac, VerificarNegativo } from './directives/directives.directive';
import { NgxDataTableModule } from 'angular-9-datatable';
import { VerRutinasComponent } from './components/entrenador/ver-rutinas/ver-rutinas.component';
import { SeguimientoComponent } from './components/entrenador/seguimiento/seguimiento.component';
import { SeguimientoGeneralComponent } from './components/entrenador/seguimiento-general/seguimiento-general.component';
import { ListaPagosComponent } from './components/entrenador/lista-pagos/lista-pagos.component';
import { ListaUsuariosComponent } from './components/entrenador/lista-usuarios/lista-usuarios.component';
import { ActivoPipe, YesNoPipe } from './pipes/activo.pipe';
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
    NuevoUsuarioComponent,
    NuevaRutinaComponent,
    MenuRutinaComponent,
    AddEjerciciosComponent,
    SeguimientoComponent,
    SeguimientoGeneralComponent,
    PublicComponent,
    AnotarPagoComponent,
    GestionarAlumnoComponent,
    AddRutinaAlumnoComponent,
    AsistenciaComponent,
    AgregarRegistroComponent,
    DirectivesDirective,
    SinMayuscula,
    SoloNumeros,
    VerificarNegativo,
    VerRutinasComponent,
    ListaPagosComponent,
    ListaUsuariosComponent,
    YesNoPipe,
    ActivoPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AlifeFileToBase64Module,
    FacebookModule.forRoot(),
    GoogleChartsModule,
    NgxDataTableModule
  ],
  providers: [LoginService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
