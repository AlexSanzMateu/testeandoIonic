import { Component } from '@angular/core';

/**
 * Generated class for the ImagenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imagen',
  templateUrl: 'imagen.html'
})
export class ImagenComponent {

  text: string;

  constructor() {
    console.log('Hello ImagenComponent Component');
    this.text = 'Hello World';
  }

}
