import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';
import { SetupProfilePage } from '../setup-profile/setup-profile';
import { MessagesPage } from '../messages/messages';

@NgModule({
  declarations: [
    TabsPage,
    ProfilePage,
    SetupProfilePage,
    MessagesPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [ProfilePage, SetupProfilePage, MessagesPage]
})
export class TabsPageModule { }
