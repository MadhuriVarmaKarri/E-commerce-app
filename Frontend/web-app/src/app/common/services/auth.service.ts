import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl, signUpUrl } from 'src/app/environments/environment';
import { Login, SignUp } from '../models/response.model';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  logIn(data: Login) {
    return this.http.post<Login>(loginUrl, data)
      .pipe(catchError((error) => {
        if (error.status === 400) {
          alert("Invalid Username or Password.. Signup for new account!!!")
        }
        return throwError(error)
      }))
  }

  signUp(data: SignUp) {
    return this.http.post<SignUp>(signUpUrl, data)
      .pipe(catchError((error) => {
        if (error.status === 400) {
          alert("Email or Username are already taken.. Try with other credentials")
        }
        return throwError(error)
      }))
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}