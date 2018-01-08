import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { UserProfile, Experience, Education } from '../../models/user-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: Observable<UserProfile>;
  profile: UserProfile;
  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.profile = new UserProfile();
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome, ${data.email}`,
          duration: 2000
        }).present();
        this.profileData = this.db.object<UserProfile>(`userProfile/${data.uid}`).valueChanges();
        this.profileData.subscribe(data => {
          this.profile = Object.assign(this.profile, data);
          console.log("Profile: " + JSON.stringify(this.profile));
        });
      }
      else {
        this.toast.create({
          message: `Authentication Failed`,
          duration: 2000
        }).present();
      }
    });
  }

  saveProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`userProfile/${auth.uid}`).set(this.profile).then(() => {
        this.toast.create({
          message: `Profile saved`,
          duration: 2000
        }).present();
      });
    });
  }

  addExperience() {
    let exp = new Experience();
    this.profile.experience.push(exp);
  }

  addEducation() {
    let edu = new Education();
    this.profile.education.push(edu);
  }

  removeExperience(index: number) {
    this.profile.experience.splice(index, 1);
  }

  removeEducation(index: number) {
    this.profile.education.splice(index, 1);
  }
}
