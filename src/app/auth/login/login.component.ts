import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


constructor(private router: Router, private authService: AuthService){}

onSubmit(form: NgForm) {

  
 
  if (form.invalid) {return}

  const {username, password} = form.value;

  this.authService.login(username!, password!).subscribe({
    next: (user) => { AuthService.user = user },
    error: (err) => { 
      window.alert(`${err.message}`);
      form.reset();
      this.router.navigate(['/auth/login']);
     
    },
    complete: () => {
     
      AuthService.isLoggedIn = true;
      this.router.navigate(['/data/catalog']);
    }
  });

}

}
