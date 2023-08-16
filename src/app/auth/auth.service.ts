import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static user: IUser | null
  static isLoggedIn: boolean
  private host: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string, gender: string) {
     return this.http.post<IUser>(`${this.host}users/register`, { username, email, password, gender })
  }

  login(username: string, password: string,) {
    return this.http.post<IUser>(`${this.host}users/login`, { username, password })
  }
  logout() {
    return this.http.get<string>(`${this.host}users/logout`)
  }
  getProfile() {
    return this.http.get<IUser | null>(`${this.host}users/profile`)
  }
  editProfile(userId: string, username: string, email: string, gender: string) {
    return this.http.put<IUser>(`${this.host}users/profile/${userId}`, { username, email, gender })
  }
}
