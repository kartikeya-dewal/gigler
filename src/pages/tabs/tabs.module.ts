import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';

@NgModule({
  declarations: [
    TabsPage,
    ProfilePage,
    MessagesPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [ProfilePage, MessagesPage]
})
export class TabsPageModule { }
