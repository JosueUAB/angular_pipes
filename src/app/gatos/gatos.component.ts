import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Gatos {
  nombre:      string;
  gusto:       string;
  edad:        number;
  descripcion: string;
}

@Component({
  selector: 'app-gatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.scss'
})
export class GatosComponent {
imagen:string='https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';

gatos:Gatos[]=[
  {
    nombre:'pepinillo',
    gusto:'jugar',
    edad:15,
    descripcion:'gato amoroso'
  },
  {
    nombre:'juan',
    gusto:'morder',
    edad:5,
    descripcion:'gato cariñoso que muerde todo'
  },
  {
    nombre:'lechuguita',
    gusto:'rascar',
    edad:3,
    descripcion:'gatito jugueton'
  },
  {
    nombre:'ortencia',
    gusto:'saltar',
    edad:2,
    descripcion:'gatito que es jugueton la combinacion de los demas'
  },
];


}
