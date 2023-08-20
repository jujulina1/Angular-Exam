import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit{
  isAuthenticating = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (user) => {
        this.isAuthenticating = false;
        AuthService.user = user;
      },
      error: () => {
        this.isAuthenticating = false;
      }
    })
  }

}
