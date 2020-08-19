import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { JWTService } from '@ng-lab/jwt';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public user;

  constructor(
    private jwtService: JWTService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ionViewWillEnter() {
    const token = this.authService.getJwtToken();
    if (token) {
      this.user = this.jwtService.decodeToken(token);
      console.log(this.user);
    } else {
      this.router.navigate(['tabs/login']);
    }
  }

}
