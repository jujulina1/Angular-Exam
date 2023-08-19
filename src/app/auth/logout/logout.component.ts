import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit{
  
  constructor(private router: Router, private authSevrice: AuthService){}
  ngOnInit(): void {
    this.authSevrice.logout().subscribe({
      next: () => {
        AuthService.user = null;
        AuthService.isLoggedIn = false;
        this.router.navigate(['/auth/login'])
      },
      error: () => {
        AuthService.user = null;
        AuthService.isLoggedIn = false;
        this.router.navigate(['/auth/login'])
      }
    });
  }

}
