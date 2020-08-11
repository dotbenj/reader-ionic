import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper: JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getJwtToken(): string | null {
    if (localStorage.getItem('token') !== 'null') {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== 'null' && !jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
}
