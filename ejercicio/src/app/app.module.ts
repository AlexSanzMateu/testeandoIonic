import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { PrimeraPage } from '../pages/primera/primera';
import { SegundaPageModule } from '../pages/segunda/segunda.module';
import { UserPageModule } from '../pages/user/user.module';
import { ComponentsModule } from '../components/components.module';
import { UserServiceProvider } from '../providers/user-service/user-service';
@NgModule({
  declarations: [
    MyApp,
    PrimeraPage,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    SegundaPageModule,
    UserPageModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrimeraPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
