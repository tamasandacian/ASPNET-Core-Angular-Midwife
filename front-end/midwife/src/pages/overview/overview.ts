import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternshipServiceProvider } from '../../providers/internship-service/internship-service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  internshipId: any;
  userId: any;

  /* Display Overview of all tasks for a given user */
  public data: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private internshipService: InternshipServiceProvider) {

    this.internshipId = JSON.parse(localStorage.getItem('internshipId'));
    this.userId = JSON.parse(localStorage.getItem('userId'));
  }

  ionViewWillEnter() {
    this.loadExportData()
  }

  loadExportData() {
    this.internshipService.getExportData(this.internshipId, this.userId).subscribe(
      (data: any) => {
      this.data = data;
    });
  }

  getExportedData(internshipId, userId) {
    internshipId = this.internshipId;
    this.internshipService.getExportData(internshipId, userId).subscribe(data => {
      this.data = data;

      var head = ['Title', 'Total No Times', 'Internship Name','Email', 'First Name', 'Last Name']
      new Angular2Csv(this.data, 'Overview Report', { headers: (head) });
    });

  }

  exportData() {
    this.getExportedData(this.internshipId, this.userId);
  }

}
