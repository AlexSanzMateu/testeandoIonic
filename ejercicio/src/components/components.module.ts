import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenComponent } from './imagen/imagen';
import { IonicPageModule } from 'ionic-angular';
import { ListComponent } from './list/list';
@NgModule({
	declarations: [ImagenComponent,
    ListComponent],
	imports: [IonicPageModule.forChild(ImagenComponent),IonicPageModule.forChild(ListComponent)],
	exports: [ImagenComponent,
    ListComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
