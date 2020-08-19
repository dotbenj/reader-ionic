import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public email: string;
  public password: string;
  public isSignIn = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.httpClient.post(`${this.apiService.getApiUrl()}login`, { email: this.email, password: this.password})
      .subscribe((data: any) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        }
      });
  }

  createUser() {
    this.httpClient.post(
      `${this.apiService.getApiUrl()}users`,
      {
        username: this.username,
        email: this.email,
        password: this.password
      })
      .subscribe((data: any) => {
        if (data._id) {
          this.isSignIn = false;
        }
      });
  }

}
