import { Component } from '@angular/core';
import { ICar } from 'src/app/shared/interfaces/car';
import { ViewsService } from '../views.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.css']
})
export class MycarsComponent {
  cars: ICar[] | any = null;
  view!: boolean
  loading: boolean = true;


  constructor(private viewsService: ViewsService, private router: Router) {
    this.viewsService.getMyCars().subscribe({
      next: (cars) => { this.cars = cars },
      error: (err) => { 
        window.alert(`${err.message}`);
        this.router.navigate(['/home']);
       },
      complete: () => {
        this.loading = false;

        if (this.cars.length > 0) {
          this.view = true;
        } else {
          this.view = false;
        }

      }
    });
  }

}
