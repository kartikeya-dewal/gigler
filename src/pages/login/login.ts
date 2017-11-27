import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { User } from '../../shared/user';

@IonicPage()
@Component({
  selector: 'page-login',
  providers: [AuthService],
  templateUrl: 'login.html',
})
export class LoginPage {
  isLoggingIn: boolean = true;
  user = {} as User;
  createSuccess = false;

  constructor(private nav: NavController, private authService: AuthService) {

  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  public login() {
    this.authService.login(this.user);
  }

  public signUp() {
    this.authService.createUser(this.user);
  }


  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}