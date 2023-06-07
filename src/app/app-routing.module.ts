import {RouterModule,Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {NgModule} from "@angular/core";
import {ServiciosContratadosComponent} from "./services-contracted/page/servicios-contratados/servicios-contratados.component";
import {BusquedaServiciosComponent} from "./search-services/page/busqueda-servicios/busqueda-servicios.component";
import {PerfilServicioComponent} from "./service-profile/page/perfil-servicio/perfil-servicio.component";
import {PublicarServicioComponent} from "./publish-service/page/publicar-servicio/publicar-servicio.component";
import {ReservaServicioComponent} from "./reserve-service/page/reserva-servicio/reserva-servicio.component";
import {ServiciosFavoritosComponent} from "./favorite-services/page/servicios-favoritos/servicios-favoritos.component";
import {MisMascotasComponent} from "./pets/page/mis-mascotas/mis-mascotas.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";


const routes: Routes=[

  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'services' , component: ServiciosContratadosComponent},
  {path: 'reservation-service' , component: ReservaServicioComponent},
  {path: 'favorites-services' , component: ServiciosFavoritosComponent},
  {path: 'pets' , component: MisMascotasComponent},
  {path: 'publish-service' , component: PublicarServicioComponent},
  {path: 'seach-services' , component: BusquedaServiciosComponent},
  {path: 'profile-service' , component: PerfilServicioComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule{


}
