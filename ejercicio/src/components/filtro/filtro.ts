import { Component } from '@angular/core';
import { SegundaPage } from '../../pages/segunda/segunda';
import { Events } from 'ionic-angular';

@Component({
  selector: 'filtro',
  templateUrl: 'filtro.html'
})
export class FiltroComponent {
  public form = [
    {val: 'male', isChecked: false},
    {val: 'female', isChecked: false},
    
  ];
  public nationality = [
    {
      id: 'DE',
      value: 'aleman',
      isChecked:false
    },
    {
      id: 'ES',
      value: 'español',
      isChecked: false
    }
  ];
  constructor( public events:Events) {
  }
  
  
  isChecked(index) {
    return this.form[index].isChecked;
  }
  
  checkValue() {
    this.events.publish('filter:created',this.form,this.nationality);
  }
}
