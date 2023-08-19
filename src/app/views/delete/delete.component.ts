import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewsService } from '../views.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  carId!: string

  constructor(private route: ActivatedRoute, private router: Router, private viewsService: ViewsService) {


    this.carId = route.snapshot.params['id'];
 }
  ngOnInit(): void {
    this.viewsService.deleteCar(this.carId).subscribe({

      error: (err) => {

        window.alert(`${err.message}`);
        this.router.navigate(['/data/catalog']);

      },
      complete: () => {
        window.alert(`Successful delete a car`);
        this.router.navigate(['/data/catalog']);
 }
    });
  }

}
