import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { UserProfile } from '../../shared/user-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: Observable<UserProfile>;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome, ${data.email}`,
          duration: 2000
        }).present();
        this.profileData = this.db.object<UserProfile>(`userProfile/${data.uid}`).valueChanges();
      }
      else {
        this.toast.create({
          message: `Authentication Failed`,
          duration: 2000
        }).present();
      }
    });
  }

}
