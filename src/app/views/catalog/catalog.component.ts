import { Component, OnInit } from '@angular/core';
import { ViewsService } from '../views.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{


  cars: ICar[] | any = null;
  view!: boolean
  loading: boolean = true;

  constructor(private viewService: ViewsService, private router: Router) {}
  ngOnInit(): void {
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
