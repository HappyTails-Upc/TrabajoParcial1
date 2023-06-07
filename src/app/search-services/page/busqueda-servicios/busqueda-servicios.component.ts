import { Component, OnInit} from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {Service} from "../../model/service";

interface Card{
  title: string;
  walker: boolean;
  trainer: boolean;
  content: string;
  distance:string;
  star:string;
  imageUrl: string;

}

@Component({
  selector: 'app-busqueda-servicios',
  templateUrl: './busqueda-servicios.component.html',
  styleUrls: ['./busqueda-servicios.component.css']
})
export class BusquedaServiciosComponent implements OnInit{

  servicesList: Service[] = [];
  constructor(private servicesService: ServicesService) { }

  cardList: Card[]=[
    {
      title: 'Luis Meza',
      walker: true,
      trainer: true,
      content: '15',
      distance: '1 km - La Marina 1760',
      star:'5.0',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2022%2F12%2F16%2FJuan-Colucho-1-1-2000.jpg'
    },
    {
      title: 'Adriana Ruiz',
      walker: true,
      trainer: false,
      content: '16',
      distance: '700 m - Teniente 1203',
      star:'4.9',
      imageUrl: 'https://img.freepik.com/foto-gratis/retrato-mujer-caucasica-sonriendo_53876-146505.jpg?t=st=1683254878~exp=1683255478~hmac=398ee3aa848ed5a7bb3e2b016d4541af8e67c1087bb3a3d93fab8ce4d0ec2422'
    },
    {
      title: 'Luna Tejada',
      walker: false,
      trainer: true,
      content: '20',
      distance: '200 m - Magdalena 203',
      star:'4.5',
      imageUrl: 'https://www.lainformacion.com/files/article_default_content/uploads/imagenes/2020/05/25/5ecb82cb7c453.jpeg'
    },
    {
      title:'Pedro Oreala',
      walker: false,
      trainer: false ,
      content: '25',
      distance: '3 km - Surco 1003',
      star:'4.3',
      imageUrl: 'https://www.paseaperros.pe/uploads/thumbs/User/300x300/324150/fote-perfil.jpg'
    },
  ];

  ngOnInit() {
    this.servicesService.getAllServices().subscribe(
      (services: Service) => {
        this.servicesList.push(services);
      },
      (error) => {
        console.error('Error al obtener los servicios:', error);
      }
    );

  }
}
