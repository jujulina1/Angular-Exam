import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICar } from 'src/app/shared/interfaces/car';
import { ViewsService } from '../views.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  car!: ICar | null;
  loading: boolean = true;
  carId!: string


  formEdit = this.fb.group({
    brand: ['', [Validators.required]],
    model: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(12)]],
    year: [1991, [Validators.required, Validators.min(1990), Validators.max(2023)]],
    image: ['', [Validators.required, Validators.pattern(/^https?:\/\/[\w\W]+/)]],
    price: [20, [Validators.required]]
  })

  constructor(private fb: FormBuilder, private viewsService: ViewsService, private route: ActivatedRoute, private router: Router) {


    this.carId = route.snapshot.params['id'];
}
  ngOnInit(): void {
    
    this.viewsService.getCarById(this.carId).subscribe({
      next: (car) => { this.car = car },
      error: (err) => {
      
        window.alert(`${err.message}`);
        this.router.navigate(['/data/catalog']);
     },
      complete: () => {
        const { brand, model, description, year, image, price } = this.car!
        this.setForm(brand, model, description, year, image, price);
        this.loading = false;
      }
    });
  }
  onSubmit() {
    

    const { brand, model, description, year, image, price } = this.formEdit.value
    this.viewsService.editCar(this.carId, brand!, model!, description!, year!, image!, price!).subscribe({
      next: (car) => { this.car = car },
      error: (err) => {
        
        window.alert(`${err.message}`);
        this.router.navigate(['/data/catalog']);

      },
      complete: () => {

        const { brand, model, description, year, image, price } = this.car!
        this.setForm(brand, model, description, year, image, price);
        this.loading = false;

        this.router.navigate(['/data/catalog']);
      }
    });


  }
  setForm(brand: string, model: string, description: string, year: number, image: string, price: number) {
    this.formEdit.setValue({ brand, model, description, year, image, price })

  }

}
