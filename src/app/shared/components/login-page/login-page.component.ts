import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {}

  public loginHandler() {
    this.authService.login().subscribe(res => {
      this.router.navigate(['courses']);
      this.authService.setToken(res.token);
    });
  }
}
