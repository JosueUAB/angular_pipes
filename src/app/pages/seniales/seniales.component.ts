import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-seniales',
  standalone: true,
  imports: [],
  templateUrl: './seniales.component.html',
  styleUrl: './seniales.component.scss'
})
export class SenialesComponent {
  count =signal<any>(1)


  constructor(){
    console.log(this.count());
  }

}
