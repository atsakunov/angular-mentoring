import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

const fakeUserInfo = {
  id: 1,
  name: 'Aliaksandr',
  token: 'token'
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: LocalStorageService) { }

  public login() {
    this.storage.setToStorage('coursesUserInfo', JSON.stringify(fakeUserInfo));
  }

  public logout() {
    this.storage.deleteFromStorage('coursesUserInfo');
  }

  public getIsAuthenticated(): boolean {
    return Boolean(this.storage.getValue('coursesUserInfo'));
  }

  public getUserInfo() {
    return this.storage.getValue('coursesUserInfo');
  }
}
