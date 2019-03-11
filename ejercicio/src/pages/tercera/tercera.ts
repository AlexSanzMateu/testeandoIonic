import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TerceraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tercera',
  templateUrl: 'tercera.html',
})
export class TerceraPage {
  public param1: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param1 = this.navParams.get("param1");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerceraPage');
    console.log(this.param1);
  }

}
