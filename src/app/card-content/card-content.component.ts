import { Component } from '@angular/core';


interface Card{
  title: string;
  walker: boolean;
  trainer: boolean;
  content: string;
  imageUrl: string;

}

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent {


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
    {
      title: 'Carlos',
      walker: false,
      trainer: true,
      content: '10/12/2022',
      imageUrl: 'https://th.bing.com/th/id/R.d8f253a62bca05d34287bd282f423b3b?rik=DtKeJw46EKmUmw&riu=http%3a%2f%2fwww.paseaperros.com%2fblog%2fwp-content%2fuploads%2f2017%2f02%2f195953-paseador-de-perros-un-fiel-compaero-1485534346.jpg&ehk=PGuc23THBHgOijjn1zgm0XP3ICT7Ljmv3TX%2b%2bayAVnQ%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      title: 'Julio',
      walker: true,
      trainer: true,
      content: '15/01/2023',
      imageUrl: 'https://th.bing.com/th/id/R.4158a2f742c83bea750dea079e495831?rik=U8he76ybaUmV2w&riu=http%3a%2f%2fwww.fm899.com.ar%2fpublic%2fimages%2fnoticias%2f60392-inicia-la-primera-capacitacion-para-paseadores-de-perros.jpg&ehk=6NHVUPkLUpdN%2btTfjbAm6sDawNJ96Hdubh06J5APCKU%3d&risl=&pid=ImgRaw&r=0'
    },
  ];
}
