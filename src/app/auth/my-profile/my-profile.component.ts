import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {



  user!: IUser | null

  view: boolean = true;
  avatar!: string;
  loading: boolean = true;


  //FORMBUILDER

  formMyProfile = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['']
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {


    this.user = AuthService.user


  }

  ngOnInit(): void {


    if (this.user) {
      this.authService.getProfile().subscribe({
        next: (user) => {
          this.user = user;
          AuthService.user = user;

        },
        error: (err) => { console.log(err) },
        complete: () => {
          this.avatar = this.setTheAvatar();
          this.loading = false;

        }
      });
    } else {
      this.router.navigate(['/auth/login'])
    }




  }
  onClick() {


    if (this.user) {
      const { username, email, gender } = this.user;
      this.formMyProfile.setValue({ username, email, gender });
    }
    if (this.view) {
      this.view = false;
    } else {
      this.view = true;
    }
  }
  onSubmit() {
   
    const { username, email, gender } = this.formMyProfile.value;
    


    if (this.user) {
      this.authService.editProfile(this.user._id, username!, email!, gender!).subscribe({
        next: (profile) => { this.user = profile; AuthService.user = profile },
        error: (err) => {
          window.alert(`${err.message}`);
          
          this.router.navigate(['/data/catalog']);
          
        },
        complete: () => {
          this.avatar = this.setTheAvatar();
          this.loading = false;
          this.onClick();

        }
      })

    }

  }


  setTheAvatar(): string { //If we have user

    let url: string = "";
    if (this.user?.gender === 'female') {
      url = `/assets/femaleAvatar.jpg`
    } else if (this.user?.gender === 'male') {
      url = `/assets/maleAvatar.jpg`
    } else {
      url = `/assets/noneAvatar.jpg`
    }
    return url;
  }

}
