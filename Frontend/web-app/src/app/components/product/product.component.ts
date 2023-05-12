import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
import { baseUrl } from 'src/app/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imgUrl = baseUrl;

  constructor(private apiService: ApiService, private router: Router) { }

  products: any;
  prodImgUrl : any;
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts()
      .subscribe((res: any) => {
        this.products = res?.data;
      })
  }

  onClickProduct(id: number){
      this.router.navigate([`admin/products/${id}`])
  }
}
