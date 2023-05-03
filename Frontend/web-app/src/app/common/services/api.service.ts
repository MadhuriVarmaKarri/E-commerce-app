import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, loginUrl, signUpUrl } from 'src/app/environments/environment';
import { Login, SignUp } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${baseUrl}/api/products?populate=*`)
  }

  getCategories(){
    return this.http.get(`${baseUrl}/api/categories?populate=*`)
  }

  getEachCategory(id: any){
    return this.http.get(`${baseUrl}/api/products?populate=*&[filters][categories][id]=${id.id}`)
  }

  getSingleProduct(id: number){
    return this.http.get(`${baseUrl}/api/products/${id}?populate=*`)
  }

  getRelatedproducts(prodId: number, catId: number){
    return this.http.get(`${baseUrl}/api/products?populate=*&[filters][id][$ne]=${prodId}
    &filters[categories][id]=${catId}`)
  }
}