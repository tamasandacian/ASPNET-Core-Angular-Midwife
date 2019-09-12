
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app/app-config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskServiceProvider {

  constructor(private http: Http, private appConfig: AppConfig) { }

  getUnionCollectionData(date: string, userId: string, internshipId: string) {
    return this.http.get(this.appConfig.apiUrl + '/api/Experience/GetUnionCollections/' + date + '/' + userId + '/' + internshipId).map(res => res.json());
  }


  updateNoOfTimes(task: any, date: string): Observable<Response> {
    let internshipId = JSON.parse(localStorage.getItem('internshipId'));
    let userId = JSON.parse(localStorage.getItem('userId'));

    const taskNoOfTimes = task.noOfTimes;

    let finalId = "";
    let taskId = task.taskId;
    let realTaskId = task.id;

    if (taskId == undefined) {
      finalId = realTaskId;
    }
    else {
      if (realTaskId == undefined) {
        finalId = taskId;
      }
    }

    let dataObject: any = {
      taskId: finalId,
      taskDate: date,
      noOfTimes: taskNoOfTimes,
      userId: userId,
      internshipId: internshipId
    }

    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.appConfig.apiUrl + "/api/Experience/StoreOrUpdateData", dataObject, options);

  }

}



