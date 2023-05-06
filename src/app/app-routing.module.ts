import {RouterModule,Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {NgModule} from "@angular/core";
import {ServiciosContratadosComponent} from "./servicios-contratados/servicios-contratados.component";
import {BusquedaServiciosComponent} from "./busqueda-servicios/busqueda-servicios.component";
import {PerfilServicioComponent} from "./perfil-servicio/perfil-servicio.component";
import {PublicarServicioComponent} from "./publicar-servicio/publicar-servicio.component";
import {ReservaServicioComponent} from "./reserva-servicio/reserva-servicio.component";
import {ServiciosFavoritosComponent} from "./servicios-favoritos/servicios-favoritos.component";
import {MisMascotasComponent} from "./mis-mascotas/mis-mascotas.component";


const routes: Routes=[

  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'services' , component: ServiciosContratadosComponent},
  {path: 'reservation-service' , component: ReservaServicioComponent},
  {path: 'favorites-services' , component: ServiciosFavoritosComponent},
  {path: 'pets' , component: MisMascotasComponent},
  {path: 'publish-service' , component: PublicarServicioComponent},
  {path: 'seach-services' , component: BusquedaServiciosComponent},
  {path: 'profile-service' , component: PerfilServicioComponent},
  {path: 'landing', component: LandingPageComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule{


}
