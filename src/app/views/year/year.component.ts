import { Component } from '@angular/core';
import { ViewsService } from '../views.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {

  cars: ICar[] | any = null;
  view!: boolean
  loading: boolean = true;


  constructor(private viewsService: ViewsService, private router: Router) {
    this.viewsService.getCarsByYear().subscribe({
      next: (cars) => { this.cars = cars },
      error: (err) => {
        window.alert(`${err.message}`);
        
        this.router.navigate(['/data/catalog']);
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
