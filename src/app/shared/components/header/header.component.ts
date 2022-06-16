import { Component, EventEmitter, Output } from '@angular/core';
import { ICourse } from '../../../core/interfaces/course.interface';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  public get isAuthenticated() {
    return this.authService.getIsAuthenticated();
  }

  public logoutHandler() {
    this.authService.logout();
  }
}
