import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from '../../app/app-config';

/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(public http: Http, private appConfig: AppConfig) {
    
  }

  login(email: string, password: string) {

    return this.http.post(this.appConfig.apiUrl + '/api/User/', { email: email, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();

        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('userId', JSON.stringify(user.id));
          this.isAuthenticated$.next(true);
        }
      });
  }

  logout() {
    localStorage.removeItem('internshipId');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentUser');
    this.isAuthenticated$.next(false);
  }

}
