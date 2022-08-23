import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserData } from '../../shared/types/user.interface';
import { IAppStore } from '../store/state/state';
import { getIsAuth, getToken } from '../store/selectors/auth';
import { saveToken } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = '';

  constructor(private http: HttpClient, private store: Store<IAppStore>) { }

  public login() {
    return this.http.post<{token: string}>('http://localhost:3004/auth/login', {
      login: 'flastname', password: 'flastname'
    });
  }

  public setToken(token: string) {
    this.token = token;
    this.store.dispatch(saveToken({ token }));
  }

  public logout() {
    this.token = '';
    this.store.dispatch(saveToken({ token: '' }));
  }

  public getToken() {
    return this.store.select(getToken);
  }

  public getIsAuthenticated(): Observable<boolean> {
    return this.store.select(getIsAuth);
  }

  public getUserInfo() {
    return this.http.post<IUserData>('http://localhost:3004/auth/userinfo', {
      token: this.token
    });
  }
}
