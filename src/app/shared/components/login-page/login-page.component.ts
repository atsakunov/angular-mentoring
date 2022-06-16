import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public login = '';

  public password = '';

  constructor(public authService: AuthService) {}

  public loginHandler() {
    this.authService.login();
  }
}
