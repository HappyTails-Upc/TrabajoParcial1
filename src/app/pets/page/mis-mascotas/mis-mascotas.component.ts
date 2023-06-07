import { Component , OnInit} from '@angular/core';
import {PetsService} from "../../services/pets.service";

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css']
})
export class MisMascotasComponent implements OnInit{

  petsList: any[] = [];
  constructor(private petsService: PetsService) {
  }

  ngOnInit() {
    const id = 2;//aqui se coloca la id del dueno
    this.getPets(id)
  }

  getPets(ownerId: number) {

    this.petsService.getPetsById_due(ownerId).subscribe(
      (response) => {
        this.petsList = response; // Agregar las mascotas devueltas a la lista
      },
      (error) => {
        console.error('Error al obtener las mascotas:', error);
      }
    );
  }


}
