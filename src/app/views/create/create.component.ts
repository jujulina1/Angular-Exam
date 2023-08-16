import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewsService } from '../views.service';
import { ICar } from 'src/app/shared/interfaces/car';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

imagePatterm = "^https?:\/\/[\w\W]+";
  formCreate= this.fb.group({
    brand: ['', [Validators.required]],
    model: ['', [Validators.required]],
    description: ['', [Validators.required,Validators.minLength(12)]],
    year: ['', [Validators.required, Validators.min(1990), Validators.max(2023)]],
    image: ['', [Validators.required, Validators.pattern(/^https?:\/\/[\w\W]+/)]],//Validators.pattern("^https?:\/\/[\w\W]+")]
    price:['', [Validators.required]]
  });

  car!: ICar|null

  constructor(private fb: FormBuilder, private router: Router, private viewService: ViewsService) {

  }
  onSubmit(){
  
    const {brand, model, description, year, image, price} = this.formCreate.value;

    
  
    this.viewService.createCar(brand!, model!, description!, Number(year)!, image!, Number(price)!).subscribe({
      next: (car) => {this.car = car },
      error: (err) => {  
        window.alert(`${err.message}`);
        this.formCreate.reset();
        this.router.navigate(['/data/create']);
      },
      complete: () => {
        this.router.navigate(['/data/catalog']);
      }
    });
  }

}
