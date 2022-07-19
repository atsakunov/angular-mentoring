import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public login = '';

  public password = '';

  constructor(public authService: AuthService, private router: Router) {}

  public loginHandler() {
    this.authService.login();
    this.router.navigate(['courses']);
  }
}
