import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
   title = 'Exam-Project';
   isAuthenticating = true;

  constructor(private authService: AuthService) {

        
  }
};
  