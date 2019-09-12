import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { InternshipServiceProvider } from '../../providers/internship-service/internship-service';
import { FormGroup } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/models/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  /* Disable login button until internship selection is made */
  loginBtnDisabled: boolean = true;

  /* Display Internships in Dropdown list */
  public internshipList: any[];
  form: FormGroup;
  user: User;

  model: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private internshipService: InternshipServiceProvider,
    private toastrCtrl: ToastController,
    private authService: AuthenticationServiceProvider) { }

  ionViewDidLoad() {

    this.authService.logout();

    this.internshipService.getAllInternships().subscribe(data => {
      this.internshipList = data;
    });

  }

  /* Select internship and get internship id value*/
  getInternshipIdValue($event): void {
    this.loginBtnDisabled = false;
    localStorage.setItem('internshipId', JSON.stringify($event.id));
  }


  login() {
    this.authService.login(this.model.email, this.model.password).subscribe(
      () => {
        /* If user authenticated then redirect to HomePage */
        let alert = this.toastrCtrl.create({
          message: 'User successfully authenticated!',
          duration: 2000
        });
        alert.present();
        this.navCtrl.setRoot(TabsPage);
      },
      err => {
        let alert = this.toastrCtrl.create({
          message: err._body,
          duration: 2000
        });
        alert.present();
        this.navCtrl.setRoot(LoginPage);
      });
  }

  navigateToRegisterPage(): void {
    this.navCtrl.setRoot(RegisterPage);
  }

}
