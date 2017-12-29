import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SetupProfilePage } from '../setup-profile/setup-profile';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = SetupProfilePage;

  constructor() {
  }

}
