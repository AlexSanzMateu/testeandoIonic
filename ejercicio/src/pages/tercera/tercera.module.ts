import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerceraPage } from './tercera';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    TerceraPage,
  ],
  imports: [
    IonicPageModule.forChild(TerceraPage),
    ComponentsModule
  ],
})
export class TerceraPageModule {}
