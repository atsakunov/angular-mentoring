import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { IUserData } from '../../shared/types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  constructor(private storage: LocalStorageService, private http: HttpClient) { }

  public login() {
    return this.http.post<{token: string}>('http://localhost:3004/auth/login', {
      login: 'flastname', password: 'flastname'
    });
  }

  public setToken(token: string) {
    this.token = token;
  }

  public logout() {
    this.token = '';
  }

  public getToken() {
    return this.token;
  }

  public getIsAuthenticated(): boolean {
    return Boolean(this.token);
  }

  public getUserInfo() {
    return this.http.post<IUserData>('http://localhost:3004/auth/userinfo', {
      token: this.token
    });
  }
}
