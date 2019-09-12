import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { User } from './models/user';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
//  rootPage:any = TabsPage;

  currentUser: User;
  isAuthenticated: boolean;
  public isAuthenticated$ = this.auth.isAuthenticated$;

  rootPage:any = LoginPage;

/* We are using the nav property for redirecting the user to login page after log out */
@ViewChild('mycontent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthenticationServiceProvider, private toastrCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.isAuthenticated$.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
      if (authenticated) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      } else {
        this.currentUser = null;
      
      }
    });

  }

  logout(){
    let alert = this.toastrCtrl.create({
      message: 'User logged out successfully!',
      duration: 2000
    });
    alert.present();
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }

}
