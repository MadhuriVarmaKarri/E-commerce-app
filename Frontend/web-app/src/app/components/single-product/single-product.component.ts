import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { baseUrl } from '../../environments/environment';
import { AddToCartService } from 'src/app/common/services/add-to-cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  productId: any
  data: any;
  imgUrl = baseUrl;
  quantity = 1;
  cartData: any;
  totalQnty: any;
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private addToCartService: AddToCartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params
      this.loadSingleProduct(this.productId.id)
    })
  }

  loadSingleProduct(id: number) {
    this.apiService.getSingleProduct(id).subscribe((res: any) => {
      this.data = res.data;
      this.productId = this.data?.id
    })
  }

  increment() {
    this.quantity = this.quantity + 1;
  }

  decrement() {
    if (this.quantity >= 1) {
      this.quantity = this.quantity - 1
    }
  }


  onAddToCart(qnty: number, data: any) {
    // let cartQnty = 0;
    this.apiService.getCartItems().subscribe((res: any) => {

      if (res.data.length > 0) {
        const avialbleItemInApi = res.data.find((el: any) => {
          return el.attributes?.product?.id === data.id
        })
        if (avialbleItemInApi) {
          this.totalQnty = avialbleItemInApi.attributes.quantity + qnty;
          this.apiService.updateCartItem(avialbleItemInApi.id, this.totalQnty, data)
          const count = res.data?.reduce((acc: number, el: any) => {
            return acc + el.attributes?.quantity
          }, 0);
          this.apiService.quantity.next(qnty + count)
        } else {
          this.apiService.setCartItem(qnty, data);
          const count = res.data?.reduce((acc: number, el: any) => {
            return acc + el.attributes?.quantity
          }, 0);
          this.apiService.quantity.next(count + qnty)
        }
      }
      else {
        this.apiService.setCartItem(qnty, data)
        this.apiService.quantity.next(qnty)
      }
      this.quantity = 1;
    })
  }

}
