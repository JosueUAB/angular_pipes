import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo',
  standalone: true
})
export class TituloPipe implements PipeTransform {

  transform(value: any): any {
    // let titulo='todos los dias nacen patos en el mundo';
    // return titulo;
    // let newValue= value.charAt(0).toUpperCase() + value.slice(1);
    // return newValue;

  }

}
