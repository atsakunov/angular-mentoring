import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import {IUserData} from "../../types/user.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  private userInfo: IUserData;

  public name = '';

  private isUserDataLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  public get isAuthenticated() {
    return this.authService.getIsAuthenticated();
  }

  ngDoCheck() {
    if (this.isAuthenticated && !this.isUserDataLoading) {
      this.isUserDataLoading = true;
      this.authService.getUserInfo().subscribe(res => {
        this.userInfo = res;
        this.name = res.name.first
      });
    }
  }

  public logoutHandler() {
    this.isUserDataLoading = false;
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
