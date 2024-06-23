import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';


export interface Personaje {
  nombre: string;
  clan:   string;
  poder:  string;
  imagen: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  imagen:string='https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';


  persobajesService= inject(PersonajesService);

//   personajes:Personaje[]=[
//     {
//         "nombre": "Naruto Uzumaki",
//         "clan": "Uzumaki",
//         "poder": "Jinchuriki del Zorro de Nueve Colas",
//         "imagen": "https://example.com/naruto.jpg"
//     },
//     {
//         "nombre": "Sasuke Uchiha",
//         "clan": "Uchiha",
//         "poder": "Sharingan, Rinnegan",
//         "imagen": "https://example.com/sasuke.jpg"
//     },
//     {
//         "nombre": "Sakura Haruno",
//         "clan": "Haruno",
//         "poder": "Fuerza y habilidades médicas avanzadas",
//         "imagen": "https://example.com/sakura.jpg"
//     },
//     {
//         "nombre": "Kakashi Hatake",
//         "clan": "Hatake",
//         "poder": "Sharingan (copiado), Chidori",
//         "imagen": "https://example.com/kakashi.jpg"
//     },
//     {
//         "nombre": "Itachi Uchiha",
//         "clan": "Uchiha",
//         "poder": "Sharingan, Mangekyo Sharingan",
//         "imagen": "https://example.com/itachi.jpg"
//     },
//     {
//         "nombre": "Hinata Hyuga",
//         "clan": "Hyuga",
//         "poder": "Byakugan, Técnicas de Juuken",
//         "imagen": "https://example.com/hinata.jpg"
//     },
//     {
//         "nombre": "Shikamaru Nara",
//         "clan": "Nara",
//         "poder": "Manipulación de sombras, gran estratega",
//         "imagen": "https://example.com/shikamaru.jpg"
//     },
//     {
//         "nombre": "Gaara",
//         "clan": "Kazekage",
//         "poder": "Jinchuriki del Shukaku, control de arena",
//         "imagen": "https://example.com/gaara.jpg"
//     },
//     {
//         "nombre": "Rock Lee",
//         "clan": "No pertenece a un clan reconocido",
//         "poder": "Taijutsu avanzado, apertura de los 8 puertos celestiales",
//         "imagen": "https://example.com/rock-lee.jpg"
//     },
//     {
//         "nombre": "Tsunade Senju",
//         "clan": "Senju",
//         "poder": "Técnicas médicas, Ninjutsu de fuerza",
//         "imagen": "https://example.com/tsunade.jpg"
//     }
// ];
personajes:any=[];

    constructor(){

    }
    ngOnInit() {
      this.loadPersonajes();


    }

    // loadPersonajes(){
    // this.persobajesService.getPersonajes()
    //   .subscribe(resp=>{
    //   console.log(resp);
    // })
    // }
    loadPersonajes(){
      this.persobajesService.getPersonajes()
      .subscribe({
        next:(resp)=>{
          this.personajes=resp;
          console.log(resp);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }


}
