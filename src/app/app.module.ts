import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { CarListService } from '../services/car-list.service';
import { UserListService } from '../services/user-list.service';
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from "../pages/home/home";
import { DatapesananPage } from "../pages/datapesanan/datapesanan";
import { ListuserPage } from "../pages/listuser/listuser";
import { AdduserPage } from "../pages/adduser/adduser";
import { PesananListService } from '../services/pesanan-list.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AdduserPage,
    ListuserPage,
    DatapesananPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AdduserPage,
    ListuserPage,
    DatapesananPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarListService,
    UserListService,
    PesananListService

  ]
})
export class AppModule {}
