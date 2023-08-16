import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { matchPass } from 'src/app/shared/validators/match-passwords';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    gender: [''],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: []

    }, {
      validators: [matchPass('password', 'rePassword')]
    })

  })

  //Initialising FormBuilder
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onSubmit() {

    if (this.form.invalid) { return; }

    let { username, email, pass: { password, rePassword } = {}, gender } = this.form.value;
    this.authService.register(username!, email!, password!, gender!).subscribe({
      next: (user) => { AuthService.user = user },
      error: (err) => {

        window.alert(`${err.message}`);
        this.form.reset();
        this.router.navigate(['/auth/register']);
      },
      complete: () => {

        AuthService.isLoggedIn = true;
        this.router.navigate(['/data/catalog']);
      }
    });

  }

}


