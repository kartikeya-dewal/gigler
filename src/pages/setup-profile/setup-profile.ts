import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from '../../models/user-profile'
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'setup-profile.html',
})
export class SetupProfilePage {

  userProfile: UserProfile;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.userProfile = {} as UserProfile;
  }

  createUserProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`userProfile/${auth.uid}`).set(this.userProfile).then(() => {
        this.navCtrl.setRoot('TabsPage');
      });
    });
  }

}
