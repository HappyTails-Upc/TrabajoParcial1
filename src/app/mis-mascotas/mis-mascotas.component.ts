import { Component } from '@angular/core';

interface Card{
  title: string;
  race: string
  content: string;
  imageUrl: string;

}


@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css']
})
export class MisMascotasComponent {

  cardList: Card[]=[
    {
      title: 'Firulais',
      race: 'Salchicha',
      content: '18/06/2021',
      imageUrl: 'https://th.bing.com/th/id/R.a11526ce6ecb4f07e91c154453f1022a?rik=vJzmTDbhJzUdew&pid=ImgRaw&r=0'
    },
    {
      title: 'Destructor',
      race: 'Pitbull',
      content: '27/11/2022',
      imageUrl: 'https://i.pinimg.com/originals/de/a7/50/dea7509113b8f0a2e3e21abe9c7b0d3f.jpg'
    },

  ];


}
