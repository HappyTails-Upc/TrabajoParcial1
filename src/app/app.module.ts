import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import { LandingPageComponent } from './landing-page/landing-page.component';

import {RouterOutlet} from "@angular/router";
import { ServiciosContratadosComponent } from './services-contracted/page/servicios-contratados/servicios-contratados.component';
import { BusquedaServiciosComponent } from './search-services/page/busqueda-servicios/busqueda-servicios.component';
import { PerfilServicioComponent } from './service-profile/page/perfil-servicio/perfil-servicio.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PublicarServicioComponent } from './publish-service/page/publicar-servicio/publicar-servicio.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ReservaServicioComponent } from './reserve-service/page/reserva-servicio/reserva-servicio.component';
import { ServiciosFavoritosComponent } from './favorite-services/page/servicios-favoritos/servicios-favoritos.component';
import { MisMascotasComponent } from './pets/page/mis-mascotas/mis-mascotas.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PetsService} from "./pets/services/pets.service";
import {AuthService} from "./security/services/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,

    ServiciosContratadosComponent,
    BusquedaServiciosComponent,
    PerfilServicioComponent,
    PublicarServicioComponent,
    ReservaServicioComponent,
    ServiciosFavoritosComponent,
    MisMascotasComponent,
    SignInComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    RouterOutlet,
    AppRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [PetsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
