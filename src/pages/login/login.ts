import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { User } from '../../shared/user';
import { LinkedInService } from '../../providers/linked-in-service/linked-in-service';

@IonicPage()
@Component({
  selector: 'page-login',
  providers: [AuthService, LinkedInService],
  templateUrl: 'login.html',
})
export class LoginPage {
  isLoggingIn: boolean = true;
  user = {} as User;
  createSuccess = false;

  constructor(private authService: AuthService, private linkedin: LinkedInService) {

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

  public linkedInSignUp() {
    this.linkedin.signUp();
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}