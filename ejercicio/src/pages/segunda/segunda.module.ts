import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegundaPage } from './segunda';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    SegundaPage,
  ],
  imports: [
    IonicPageModule.forChild(SegundaPage),
    ComponentsModule
  ],
})
export class SegundaPageModule {}
