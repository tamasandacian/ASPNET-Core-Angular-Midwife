
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app/app-config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
/*
  Generated class for the InternshipServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InternshipServiceProvider {

  constructor(public http: Http, private appConfig: AppConfig) { }

  getAllInternships() {
    return this.http.get(this.appConfig.apiUrl + '/api/Internship').map(res => res.json());
  }

  getExportData(internshipId: any, userId: any) {
    return this.http.get(this.appConfig.apiUrl + '/api/Experience/GetExportData/' + internshipId + '/' + userId).map(res => res.json());
  }

}
