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
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import {RouterOutlet} from "@angular/router";
import { ServiciosContratadosComponent } from './servicios-contratados/servicios-contratados.component';
import { BusquedaServiciosComponent } from './busqueda-servicios/busqueda-servicios.component';
import { PerfilServicioComponent } from './perfil-servicio/perfil-servicio.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PublicarServicioComponent } from './publicar-servicio/publicar-servicio.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ReservaServicioComponent } from './reserva-servicio/reserva-servicio.component';
import { ServiciosFavoritosComponent } from './servicios-favoritos/servicios-favoritos.component';
import { MisMascotasComponent } from './mis-mascotas/mis-mascotas.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponentComponent,
    ServiciosContratadosComponent,
    BusquedaServiciosComponent,
    PerfilServicioComponent,
    PublicarServicioComponent,
    ReservaServicioComponent,
    ServiciosFavoritosComponent,
    MisMascotasComponent
  ],
    imports: [
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
        MatSlideToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
