import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { NavController } from 'ionic-angular';
import { TerceraPage } from '../../pages/tercera/tercera';
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

  constructor(public userService : UserServiceProvider, public navCtrl: NavController){
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
  verDetalles(user){
      this.navCtrl.push(TerceraPage,{param1:user});
  }
}
