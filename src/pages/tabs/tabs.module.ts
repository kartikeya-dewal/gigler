import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ProfilePage } from '../profile/profile';
import { SetupProfilePage } from '../setup-profile/setup-profile';

@NgModule({
  declarations: [
    TabsPage,
    ProfilePage,
    SetupProfilePage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [ProfilePage, SetupProfilePage]
})
export class TabsPageModule { }
