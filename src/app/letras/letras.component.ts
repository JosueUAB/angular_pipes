import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TituloPipe } from '../pipes/titulo.pipe';

@Component({
  selector: 'app-letras',
  standalone: true,
  imports: [CommonModule,
            TituloPipe,
  ],
  templateUrl: './letras.component.html',
  styleUrl: './letras.component.scss'
})
export class LetrasComponent {

pipes=[
  'upercasepipe',
  'lowercasepipe',
  'titlecasepipe',
  'slicepipe',
  'decimalpipe',
  'percentpipe',
  'currencypipe',
  'asyncpipe',
  'datepipe',
];
letras:string='Compañía cariñosa e independiente: Los gatos son expertos en brindar amor y compañía a la par que disfrutan de su independencia. A diferencia de los perros, no requieren tanta atención constante, lo que los convierte en una excelente opción para personas con un estilo de vida ocupado';

ngOnInit(): void {
 console.log(this.pipes);

}
}
