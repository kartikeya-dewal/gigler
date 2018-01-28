import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';
import { JobCardPage } from '../job-card/job-card';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = JobCardPage;
  tab2Root = ProfilePage;
  tab3Root = MessagesPage;

  constructor() {
  }

}
