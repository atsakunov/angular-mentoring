import {
  Component, DoCheck, OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { IUserData } from '../../types/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck, OnInit {
  public name = '';

  public isAuthenticated = false;

  private userInfo: IUserData;

  private isUserDataLoading: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getIsAuthenticated().subscribe(res => {
      this.isAuthenticated = res;
    });
  }

  ngDoCheck() {
    if (this.isAuthenticated && !this.isUserDataLoading) {
      this.isUserDataLoading = true;
      this.authService.getUserInfo().subscribe(res => {
        this.userInfo = res;
        this.name = res.name.first;
      });
    }
  }

  public logoutHandler() {
    this.isUserDataLoading = false;
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
