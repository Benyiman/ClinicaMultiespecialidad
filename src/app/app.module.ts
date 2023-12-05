import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { FichaClinicaComponent } from './Components/ficha-clinica/ficha-clinica.component';
import { AgendarHoraComponent } from './Components/agendar-hora/agendar-hora.component';
import { IngresarMedicoComponent } from './Components/ingresar-medico/ingresar-medico.component';
import { RegistroPagoComponent } from './Components/registro-pago/registro-pago.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { environment } from '../app/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FichaClinicaComponent,
    AgendarHoraComponent,
    IngresarMedicoComponent,
    RegistroPagoComponent
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
