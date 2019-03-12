import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the UserDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailComponent {

  public prop1 : string;

  constructor(public navParams: NavParams) {
    this.prop1 = this.navParams.get('prop1');
  }

}
