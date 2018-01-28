import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';
import { JobCardPage } from '../job-card/job-card';

@NgModule({
  declarations: [
    TabsPage,
    JobCardPage,
    ProfilePage,
    MessagesPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [JobCardPage, ProfilePage, MessagesPage]
})
export class TabsPageModule { }
