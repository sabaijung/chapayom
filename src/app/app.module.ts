import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PromotionPage } from '../pages/promotion/promotion';
import { PerchaseHistoryPage } from '../pages/perchase-history/perchase-history';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeverageServiceProvider } from '../providers/beverage-service/beverage-service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenServiceProvider } from '../providers/authen-service/authen-service';

import { FIREBASE_CONFIG } from '../firebase/config';



@NgModule({
  declarations: [
    MyApp,
    PerchaseHistoryPage,
    PromotionPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(TabsPage),
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerchaseHistoryPage,
    PromotionPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeverageServiceProvider,
    AuthenServiceProvider
  ]
})
export class AppModule {}
