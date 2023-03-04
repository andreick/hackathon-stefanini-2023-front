import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  private readonly KEY = 'auth-token';

  constructor() { }

  get token() {
    return localStorage.getItem(this.KEY) ?? '';
  }

  set token(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  hasToken(): boolean {
    return this.token !== '';
  }

  deleteToken(): void {
    localStorage.removeItem(this.KEY);
  }
}
