import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobCardPage } from './job-card';

@NgModule({
  declarations: [
    JobCardPage,
  ],
  imports: [
    IonicPageModule.forChild(JobCardPage),
  ],
})
export class JobCardPageModule {}
