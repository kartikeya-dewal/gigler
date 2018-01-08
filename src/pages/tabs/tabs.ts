import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = MessagesPage;

  constructor() {
  }

}
