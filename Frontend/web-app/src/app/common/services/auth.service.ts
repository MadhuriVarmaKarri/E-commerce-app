import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl, signUpUrl } from 'src/app/environments/environment';
import { Login, SignUp } from '../models/response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  logIn(data: Login) {    
    return this.http.post<Login>(loginUrl, data)
  }

  signUp(data: SignUp) {
     return this.http.post<SignUp>(signUpUrl, data)
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn(){    
     return this.getToken() !== null
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}