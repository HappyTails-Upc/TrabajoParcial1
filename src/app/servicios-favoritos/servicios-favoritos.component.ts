import { Component } from '@angular/core';

interface Card{
  title: string;
  walker: boolean;
  trainer: boolean;
  content: string;
  imageUrl: string;

}

@Component({
  selector: 'app-servicios-favoritos',
  templateUrl: './servicios-favoritos.component.html',
  styleUrls: ['./servicios-favoritos.component.css']
})
export class ServiciosFavoritosComponent {

  cardList: Card[]=[
    {
      title: 'Alex',
      walker: true,
      trainer: true,
      content: '18/06/2021',
      imageUrl: 'https://th.bing.com/th/id/R.0b0f9c897bcddbface13f518e3a6259d?rik=dtP9SRVyZbSGRA&riu=http%3a%2f%2funiemprendia.es%2fwp-content%2fuploads%2f2017%2f02%2fpaseadores-perros.jpg&ehk=jPF%2fWZxmbuGGlDZdWQF0EuZYau9gYVBok0QB9PcdF6E%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      title: 'Pedro',
      walker: true,
      trainer: false,
      content: '27/11/2022',
      imageUrl: 'https://files.rcnradio.com/public/2021-04/Paseador%20de%20perros.jpg?EQeZrrIFUVHgykZhTl.t76AXOKl7z6vn'
    },

  ];

}
