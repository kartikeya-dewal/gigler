import { Injectable } from '@angular/core';
import { User } from '../../shared/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) { }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('HomePage');
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  async createUser(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

}