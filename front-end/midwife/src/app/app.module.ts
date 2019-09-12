import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
/* Ionic Services */
import { TaskServiceProvider } from '../providers/task-service/task-service';
import { InternshipServiceProvider } from '../providers/internship-service/internship-service';

/* Web API Url */
import { AppConfig } from './app-config';

/* Ionic Pages */
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

/* Ionic New Components */
import { MultiPickerModule } from 'ion-multi-picker';
import { DatePipe } from '@angular/common';
import { SearchPipe } from '../pipes/search/search';
import { FormsModule } from '@angular/forms';

import { OverviewPage } from '../pages/overview/overview';
import { RegisterPage } from '../pages/register/register';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SearchPipe,
    OverviewPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    MultiPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    OverviewPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskServiceProvider,
    InternshipServiceProvider,
    AppConfig,
    DatePipe,
    SearchPipe,

    UserServiceProvider,
    AuthenticationServiceProvider
  ]
})
export class AppModule { }
