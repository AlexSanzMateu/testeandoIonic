import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenComponent } from './imagen/imagen';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [ImagenComponent],
	imports: [IonicPageModule.forChild(ImagenComponent)],
	exports: [ImagenComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
