import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, loginUrl, signUpUrl } from 'src/app/environments/environment';
import { Login, SignUp } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  logIn(data: Login) {    
    return this.http.post<Login>(loginUrl, data)
  }

  signUp(data: SignUp) {
     return this.http.post<SignUp>(signUpUrl, data)
  }
  getProducts() {
    return this.http.get(`${baseUrl}/products`, )
  }

}
