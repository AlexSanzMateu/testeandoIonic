import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenComponent } from './imagen/imagen';
import { IonicPageModule } from 'ionic-angular';
import { ListComponent } from './list/list';
import { UserDetailComponent } from './user-detail/user-detail';
import { FiltroComponent } from './filtro/filtro';
@NgModule({
	declarations: [ImagenComponent,
    ListComponent,
    UserDetailComponent,
    FiltroComponent],
	imports: [IonicPageModule.forChild(ImagenComponent),IonicPageModule.forChild(ListComponent), IonicPageModule.forChild(UserDetailComponent)],
	exports: [ImagenComponent,
    ListComponent,
    UserDetailComponent,
    FiltroComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
