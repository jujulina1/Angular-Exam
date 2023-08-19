import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { IUser } from 'src/app/shared/interfaces/user';
import { ViewsService } from '../views.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  car!: ICar | null
  user!: IUser | null
  isLogin!: boolean
  carId!: string
  loading: boolean = true



  constructor(private viewsService: ViewsService, private router: Router, private route: ActivatedRoute) {

    this.user = AuthService.user;
    this.carId = this.route.snapshot.params['id'];

  }
  ngOnInit(): void {


  //1> If we dont have user
    if (!this.user) {
      this.isLogin = false;
    }
    

    this.viewsService.getCarById(this.carId).subscribe({
      next: (car) => { this.car = car },
      error: (err) => {
        window.alert(`${err.message}`);
        this.router.navigate(['/data/catalog']);

      },
      complete: () => {
        this.loading = false;

        if (AuthService.user) {
          let currentUserId = AuthService.user._id
          let carOwnerId = this.car?.userId;


          if (currentUserId === carOwnerId) {
            this.isLogin = true;
          }
        }


      }
    });

  }


  onEdit() {

    this.router.navigate([`data/edit/${this.carId}`]);
  }
  onDelete() {

    this.router.navigate([`data/delete/${this.carId}`]);

  }

}

