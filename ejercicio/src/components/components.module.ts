import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenComponent } from './imagen/imagen';
import { IonicPageModule } from 'ionic-angular';
import { ListComponent } from './list/list';
import { UserDetailComponent } from './user-detail/user-detail';
import { FiltroComponent } from './filtro/filtro';
import { SearchFilterComponent } from './search-filter/search-filter';
@NgModule({
	declarations: [ImagenComponent,
    ListComponent,
    UserDetailComponent,
    FiltroComponent,
    SearchFilterComponent],
    imports: [IonicPageModule.forChild(ImagenComponent),
             IonicPageModule.forChild(ListComponent),
             IonicPageModule.forChild(UserDetailComponent),
             IonicPageModule.forChild(SearchFilterComponent)
            ],
             
	exports: [ImagenComponent,
    ListComponent,
    UserDetailComponent,
    FiltroComponent,
    SearchFilterComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
