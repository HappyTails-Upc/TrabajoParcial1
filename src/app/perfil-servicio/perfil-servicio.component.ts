import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-perfil-servicio',
  templateUrl: './perfil-servicio.component.html',
  styleUrls: ['./perfil-servicio.component.css']
})
export class PerfilServicioComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'white'},
    {text: 'Three', cols: 2, rows: 1, color: 'white'}
  ];
}
