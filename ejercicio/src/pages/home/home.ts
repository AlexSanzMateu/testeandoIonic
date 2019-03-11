import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrimeraPage } from '../primera/primera';
import { SegundaPage } from '../segunda/segunda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public goToPrimera(){
    this.navCtrl.push(PrimeraPage,{param1:"Esta es la", param2:"primera página"});
  }
  public goToSegunda(){
    this.navCtrl.push(SegundaPage);
  }
}
