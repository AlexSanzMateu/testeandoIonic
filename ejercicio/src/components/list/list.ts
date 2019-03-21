import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { NavController, ModalController, NavParams, Footer, Events } from 'ionic-angular';
import { UserDetailComponent } from '../user-detail/user-detail';
import { UserPage } from '../../pages/user/user';
import { isRightSide } from 'ionic-angular/umd/util/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  users: any[] = [];
  usersFiltered = [];
  usersFilteredByNationality = [];
  sexFilters;
  foo = false;
  nationFilters;
  searchValue;
  genres = [];
  nationalities = [];
  noExists = -1;

  constructor(public userService : UserServiceProvider, public navCtrl: NavController, public modalController: ModalController, public events:Events){
    this.getHttpUsers();
  
    events.subscribe('filter:created', (form, nationality) => {
      this.sexFilters = form;
      this.nationFilters = nationality;
      this.genres = [];
      this.nationalities = [];


      this.genresSelected();
      this.nationSelected();

      if(this.genres.length > 0 || this.nationalities.length > 0) {
        this.usersFilteredByGenderOrNationality();
      }
      this.usersFilteredByGenderAndNationality()
      
    })

    events.subscribe('searchbar:created', (searchValue) => {
      this.searchValue = searchValue;
      if(this.searchValue.length > 0){
        this.usersFilteredBySearchbar()
      }
    })

    events.subscribe('remove:created',(status) => {
      if( status === true ) {
        this.usersFilteredBySearchbarRemoved()
      }
    })
  }

  genresSelected() {
    if (this.sexFilters) {
      this.sexFilters.forEach( filter => {
        if (this.isGenreChecked(filter)) this.genres.push(filter.val);
        if (this.isGenreUnChecked(filter)) this.usersFiltered = this.users
      });
    }
  }

  nationSelected() {
    if (this.nationFilters) {
      this.nationFilters.forEach( filter => {
        if (this.isNationChecked(filter)) this.nationalities.push(filter.id);
      });
    }
  }

  isGenreChecked(filter) {
    return (filter.val === 'male' || filter.val === 'female') && filter.isChecked;
  }
  isGenreUnChecked(filter) {
    return (filter.val === 'male' || filter.val === 'female') && filter.isChecked == false;
  }

  isNationChecked(filter) {
    return (filter.id === 'DE' || filter.id === 'ES') && filter.isChecked;
  }
  isNationUnChecked(filter) {
    return (filter.id === 'DE' || filter.id === 'ES') && filter.isChecked == false;
  }

  getHttpUsers(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
        this.usersFiltered = this.users;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  usuariosFiltrados() {
    this.usersFiltered = [];
    this.users.forEach( user => {
      this.genres.length < 1 ? this.usersFiltered.push(user) : this.checkAndSaveUser(user); 
    });
  }
  usuariosFiltradosPorNacionalidad() {
    this.usersFiltered = [];
    this.users.forEach( user => {
      this.nationalities.length < 1 ? this.usersFiltered.push(user) : this.checkAndSaveUserByNation(user);
    })
  }
  usuariosFiltradosPorSexoNacionalidad(){
    this.usersFiltered = [];
    this.users.forEach ( user => {
      (this.genres.length < 1 && this.nationalities.length < 1) ? this.usersFiltered.push(user) : this.checkAndSaveUsersBySexAndNation(user);
    })
  }
  usersFilteredBySearchbar(){
    this.usersFiltered = [];
    this.users.forEach( user => {
      this.searchValue.length <= 0 ? this.usersFiltered.push(user) : this.checkAndSaveUserBySearchbar(user)
    })
  }

  usersFilteredBySearchbarRemoved(){
    this.searchValue = '';
    this.usersFiltered = this.users;
  }
  
  usersFilteredByGenderOrNationality(){
      this.genres.length > 0 ? this.usuariosFiltrados() : this.usuariosFiltradosPorNacionalidad(); 
   }

  usersFilteredByGenderAndNationality(){
    if(this.genres.length > 0 && this.nationalities.length > 0){
      this.usuariosFiltradosPorSexoNacionalidad()
    } 
  }

  checkAndSaveUser(user) {
    if (this.genres.indexOf(user.gender) > this.noExists) this.usersFiltered.push(user);
  }

  checkAndSaveUserByNation(user) {
    if (this.nationalities.indexOf(user.nat) > this.noExists) this.usersFiltered.push(user);
  }

  checkAndSaveUsersBySexAndNation(user){
    if (this.genres.indexOf(user.gender) > this.noExists && this.nationalities.indexOf(user.nat) > this.noExists ) this.usersFiltered.push(user)
  }

  checkAndSaveUserBySearchbar(user){
    if(this.searchValue.toLowerCase() == user.name.first){
      this.usersFiltered.push(user)
    } 
  }

  deleteUser(user){
    let position = this.users.findIndex(n => n.name.first === user.name.first);
    return this.users.splice(position,1);
  }

  modalDetails(user){
    let modal = this.modalController.create(UserPage,{prop1:user});
    modal.present();
  }
}
