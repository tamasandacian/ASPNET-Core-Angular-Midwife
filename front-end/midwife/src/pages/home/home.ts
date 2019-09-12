import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /* Input validation noOfTimes button -> button can be accessed only if checkbox is checked */
  noOfTimesBtn: boolean = true;
  /* Define an empty string for searchbox functionality */
  searchTerm: string = '';
  /* Display all tasks */
  public taskList: any = [];
  /* Define the number of Times as an array */
  noOfTimes: any[];
  /* Define date */
  date: any;
  /* Get userId from session and pass as parameter in the method */
  userId: any;
  /* Get internship from session and pass as parameter in the method */
  internshipId: any;

  constructor(
    public navCtrl: NavController,
    private datePipe: DatePipe,
    private taskService: TaskServiceProvider,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) {

    /* Display calendar date in navigation bar */
    this.date = new Date().toISOString();
    this.datePipe.transform(this.date, "yyyy-MM-dd");
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.internshipId = JSON.parse(localStorage.getItem("internshipId"));

    this.noOfTimes = [
      {
        options: [
          { text: '0', value: '0' },
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' },
          { text: '4', value: '4' },
          { text: '5', value: '5' },
          { text: '6', value: '6' },
          { text: '7', value: '7' },
          { text: '8', value: '8' },
          { text: '9', value: '9' },
          { text: '10', value: '10' }
        ]
      }
    ];

    this.getAllExperiences();
  }

  ionViewDidLoad() { }


  getAllExperiences() {
    let dateStr = this.datePipe.transform(this.date, "yyyy-MM-dd");
    this.taskService.getUnionCollectionData(dateStr, this.userId, this.internshipId).subscribe(
      (data: any[]) => {
      this.taskList = data;
    });
  }

  updateNoOfTimesValue(task) {
    var date = this.datePipe.transform(this.date, "yyyy-MM-dd");
    this.taskService.updateNoOfTimes(task, date).subscribe(
      () => {
      this.getAllExperiences();
      let alert = this.toastCtrl.create({
        message: 'The number of times has been successfully updated!',
        duration: 2000
      });
      alert.present();
    }, 
    (err) => {
      let alert = this.toastCtrl.create({
        message: err._body,
        duration: 2000
      });
      alert.present();
    });
  }

  getDateValue(date) {
    var dateStr = this.datePipe.transform(date, "yyyy-MM-dd");
    this.taskService.getUnionCollectionData(dateStr, this.userId, this.internshipId).subscribe(
      (tasks: any[]) => {
      this.taskList = tasks;
    });
  }

  searchExperience(ev: any) {
    this.searchTerm = ev.target.value;
  }

}
