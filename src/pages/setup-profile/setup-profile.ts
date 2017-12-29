import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from '../../shared/user-profile'
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'setup-profile.html',
})
export class SetupProfilePage {

  userProfile = {} as UserProfile;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  createUserProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`userProfile/${auth.uid}`).set(this.userProfile).then(() => {
        this.navCtrl.push('ProfilePage');
      });
    });
  }

}
