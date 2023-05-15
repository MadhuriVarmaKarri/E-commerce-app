import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  quantity = new BehaviorSubject(0);

  getProducts() {
    return this.http.get(`${baseUrl}/api/products?populate=*`)
  }

  getCategories() {
    return this.http.get(`${baseUrl}/api/categories?populate=*`)
  }

  getEachCategory(id: any) {
    return this.http.get(`${baseUrl}/api/products?populate=*&[filters][categories][id]=${id.id}`)
  }

  getSingleProduct(id: number) {
    return this.http.get(`${baseUrl}/api/products/${id}?populate=*`)
  }

  getRelatedproducts(prodId: number, catId: number) {
    return this.http.get(`${baseUrl}/api/products?populate=*&[filters][id][$ne]=${prodId}
    &filters[categories][id]=${catId}`)
  }

  setCartItem(qnty: number, item: any) {
    return this.http.post(`${baseUrl}/api/cart-items`, {
      "data": {
        "quantity": qnty,
        "product": item
      }
    }).subscribe((res) => {
      // console.log(res);
    })
  }

  getCartItems() {
    return this.http.get(`${baseUrl}/api/cart-items`)
  }

  updateCartItem(id: number, qnty: number, item: any) {
    return this.http.put(`${baseUrl}/api/cart-items/${id}`, {
      "data": {
        "quantity": qnty,
        "product": item
      }
    }).subscribe((res) => {
      //console.log(res);
    })
  }

  deleteCartItem(id: number) {
    return this.http.delete(`${baseUrl}/api/cart-items/${id}`)
  }
}