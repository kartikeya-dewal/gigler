import { Injectable } from '@angular/core';
import { UserProfile } from '../../shared/user-profile';
import { LinkedIn, LinkedInLoginScopes } from '@ionic-native/linkedin';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class LinkedInService {
  userProfile: AngularFireList<UserProfile>;
  userId: any;
  isLoggedIn: boolean = false;
  scopes: LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin'];

  constructor(private linkedin: LinkedIn, public navCtrl: NavController, private toast: ToastController, private db: AngularFireDatabase) {
    this.userProfile = this.db.list('/userProfile');
  }

  async signUp() {
    try {
      const res = await this.linkedin.login(this.scopes, true);
      if (res) {
        console.log("signUp: " + res);
        this.isLoggedIn = true;
        this.getUserProfile().then(() => {
          this.navCtrl.setRoot('ProfilePage', { profile: `${this.userId}` });
        });
      }
    }
    catch (e) {
      this.toast.create({
        message: `Error Logging to LinkedIn`,
        duration: 3000
      }).present();
    }
  }

  logout() {
    this.linkedin.logout();
    this.isLoggedIn = false;
  }

  async getUserProfile() {
    try {
      const res = await this.linkedin.getRequest('people/~');
      if (res) {
        console.log(JSON.stringify(res));
        this.userId = this.db.createPushId();
        this.userProfile.set(this.userId, res);
        return this.userId;
      }
    }
    catch (e) {
      console.log("ERROR: " + JSON.stringify(e));
    }
  }

  async ionViewDidAppear() {
    try {
      console.log("Inside ionViewDidAppear");
      const active = await this.linkedin.hasActiveSession();
      this.isLoggedIn = active;
      console.log("isLoggedIn: " + this.isLoggedIn);
      if (this.isLoggedIn === true) {
        this.getUserProfile().then((data) => {
          console.log("ionViewDidAppear: getUserProfile: " + data);
        });
      }
    }
    catch (e) {
      console.log("ERROR: " + JSON.stringify(e));
    }
  }

}
