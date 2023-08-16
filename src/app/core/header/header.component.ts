import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{


  
  get user() {
    return AuthService.user;
  } 
  get isLoggedIn() {
    return AuthService.isLoggedIn;
  }

}
