import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public setToStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public deleteFromStorage(key: string) {
    localStorage.removeItem(key);
  }

  public getValue(key: string) {
    return localStorage.getItem(key);
  }
}
