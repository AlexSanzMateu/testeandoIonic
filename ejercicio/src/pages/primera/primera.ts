import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrimeraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primera',
  templateUrl: 'primera.html',
})
export class PrimeraPage {
  public param1 : string;
  public param2: string;
  public allParams;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param1 = this.navParams.get("param1");
    this.param2 = this.navParams.get("param2");
    this.allParams = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeraPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

}
