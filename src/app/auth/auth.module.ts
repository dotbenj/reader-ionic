import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [AuthService],
})
export class AuthModule { }
