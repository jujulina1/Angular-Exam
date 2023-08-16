import { Component } from '@angular/core';
import { ViewsService } from '../views.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {


  cars: ICar[] | any = null;
  view!: boolean
  loading: boolean = true;

  constructor(private viewService: ViewsService, private router: Router) {


    this.viewService.getAllCars().subscribe({
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
//`https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80`