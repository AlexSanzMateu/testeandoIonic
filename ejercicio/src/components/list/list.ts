import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { NavController, ModalController } from 'ionic-angular';
import { UserDetailComponent } from '../user-detail/user-detail';
import { UserPage } from '../../pages/user/user';
import { useAnimation } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  users: any[] = [];
  user: any[] = [];

  constructor(public userService : UserServiceProvider, public navCtrl: NavController, public modalController: ModalController){
    this.getHttpUsers();
  }

  getHttpUsers(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )

  }
  deleteUser(user){
    let position = this.users.findIndex(n => n.name.first === user.name.first);
    return this.users.splice(position,1);
  }
  modalDetails(user){
    let modal = this.modalController.create(UserPage,{prop1:user});
    return modal.present();
  }
}
