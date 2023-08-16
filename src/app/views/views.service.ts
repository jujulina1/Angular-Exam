import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ICar } from '../shared/interfaces/car';


@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  private host: string = 'http://localhost:3000/';
  private userId: string | undefined = AuthService.user?._id

  constructor(private http: HttpClient) { }

  createCar(brand: string, model: string, description: string, year: number, image: string, price: number) {
    return this.http.post<ICar>(`${this.host}data/cars`, { brand, model, description, year, image, price });

  }
  editCar(carId: string, brand: string, model: string, description: string, year: number, image: string, price: number) {
    return this.http.put<ICar>(`${this.host}data/cars/${carId}`, { brand, model, description, year, image, price });
  }
  deleteCar(carId: string) {
    return this.http.delete<ICar>(`${this.host}data/cars/${carId}`);

  }
  getCarsByYear() {
    return this.http.get<ICar[] | null>(`${this.host}data/cars/year`);
    //?sort=year
  }
  getMyCars() {
    return this.http.get<ICar[] | null>(`${this.host}data/mycars`);
    //?sort=year
  }
  getAllCars() {
    return this.http.get<ICar[]>(`${this.host}data/cars`);
  }
  //return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}`
  getCarById(id: string) {
    return this.http.get<ICar>(`${this.host}data/cars/${id}`);
  }

}
