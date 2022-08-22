import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

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
    this.authService.login().subscribe(res => {
      this.router.navigate(['courses']);
      this.authService.setToken(res.token);
    });
  }
}
