import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'search-filter',
  templateUrl: 'search-filter.html'
})
export class SearchFilterComponent {

    public searchValue;
    public status = false;
  constructor(public events : Events) {
  }
  sendSearchValue() {
 //  console.log(this.searchValue)
    this.events.publish('searchbar:created',this.searchValue);
  }
  removeFilter(){
    this.status = true;
    this.events.publish('remove:created',this.status);
  }
}
