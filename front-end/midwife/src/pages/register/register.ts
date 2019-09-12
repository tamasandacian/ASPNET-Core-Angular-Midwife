import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  

  model: any = {};
  loading = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserServiceProvider,
    public toastCtrl: ToastController
  ) { }

  ionViewDidLoad() {
    if (localStorage.getItem("currentUser")) this.navCtrl.push('');
  }


  register() {
    this.loading = true;
    this.userService.create(this.model).subscribe(data => {
      let alert = this.toastCtrl.create({
        message: 'User registered successfully!',
        duration: 2000
      });
      alert.present();

      this.navCtrl.setRoot(LoginPage);

    }, err => {
      let alert = this.toastCtrl.create({
        message: err._body,
        duration: 2000
      });
      alert.present();
    });
  }

  navigateToLoginPage(): void {
    this.navCtrl.setRoot(LoginPage);
 }

}
