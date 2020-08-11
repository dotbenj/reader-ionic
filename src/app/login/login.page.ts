import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

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
  ) { }

  ngOnInit() {
  }

  login() {
    this.httpClient.post(`https://dotben-mangareader-api.herokuapp.com/login`, { email: this.email, password: this.password})
      .subscribe((data: any) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        }
      });
  }

  createUser() {
    this.httpClient.post(
      `https://dotben-mangareader-api.herokuapp.com/users`,
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
