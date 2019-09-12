import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { OverviewPage } from '../overview/overview';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OverviewPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
