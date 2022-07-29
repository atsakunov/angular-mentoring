import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  public get isAuthenticated() {
    return this.authService.getIsAuthenticated();
  }

  public logoutHandler() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
