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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
