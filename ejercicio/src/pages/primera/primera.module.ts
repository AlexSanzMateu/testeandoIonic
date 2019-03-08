import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeraPage } from './primera';

@NgModule({
  declarations: [
    PrimeraPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeraPage),
  ],
})
export class PrimeraPageModule {}
