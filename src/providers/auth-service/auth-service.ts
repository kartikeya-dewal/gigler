import { Injectable } from '@angular/core';
import { User } from '../../shared/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private toast: ToastController) { }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('TabsPage');
      }
    }
    catch (e) {
      console.error(JSON.stringify(e));
      this.toast.create({
        message: `${e.message}`,
        duration: 3000
      }).present();
    }
  }

  async createUser(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.setRoot('SetupProfilePage');
      }
    }
    catch (e) {
      console.error(JSON.stringify(e));
      this.toast.create({
        message: `${e.message}`,
        duration: 3000
      }).present();
    }
  }

}