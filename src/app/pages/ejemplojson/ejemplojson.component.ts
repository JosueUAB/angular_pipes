import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplojson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplojson.component.html',
  styleUrl: './ejemplojson.component.scss'
})
export class EjemplojsonComponent {
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
