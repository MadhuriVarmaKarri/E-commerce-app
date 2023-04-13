import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  onSignIn(data: any) : Observable<any>{    
    return this.http.post<any>('http://localhost:1337/api/auth/local', data)
  }

  getProducts() {
    return this.http.get(`${baseUrl}/products`)
  }

}
