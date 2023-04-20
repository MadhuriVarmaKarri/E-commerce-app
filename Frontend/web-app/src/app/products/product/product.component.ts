import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/services/api.service';
import { baseUrl } from 'src/app/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imgUrl = baseUrl;

  constructor(private apiService: ApiService) { }

  products: any;
  prodImgUrl : any;
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts()
      .subscribe((res: any) => {
         console.log(res.data);
        this.products = res.data;
        this.products.map((el: any) => {
         // console.log(el.attributes.image);
          // (el.attributes.image.data).map((el: any)=>{
          //   console.log(baseUrl + el.attributes.url);

          // })
        })
      })
  }
}
