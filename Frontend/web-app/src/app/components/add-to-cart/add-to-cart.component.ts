import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AddToCartService } from 'src/app/common/services/add-to-cart.service';
import { ApiService } from 'src/app/common/services/api.service';
import { baseUrl } from 'src/app/environments/environment';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  quantity = 1;
  cartItems: any;
  imgUrl = baseUrl;
  totalPrice!: number;
  emptyCart = false;
  
  @Input() openAddToCart: any;
  @Output() closeAddToCart = new EventEmitter<boolean>();

  constructor(private apiService: ApiService) { }


  ngOnChanges() {

  }

  ngOnInit(): void {
    this.getAllCartItems()
  }

  removeProductFromCart(id: number) {
    this.apiService.deleteCartItem(id).subscribe((res: any) => {
      alert (`Do you really want to delete this ${res.id} ?`)
      this.getAllCartItems();
    })
  }


  getAllCartItems() {

    this.apiService.getCartItems().subscribe((res: any) => {
      console.log(res.data);
      this.cartItems = res.data;
      if(this.cartItems.length === 0) {
        this.emptyCart = true;
      }
      this.getTotalPrice();
    })
  }

  getTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc: number, el: any) => {
      return (acc + el.attributes.product.attributes.price) * el.attributes.quantity
    }, 0)
  }

  increment(id: number) {
    const index = this.cartItems.findIndex((item: any) => item.id === id)
    this.cartItems[index].attributes.quantity += 1
    const updateProduct = this.cartItems[index].attributes.product
    const updatedQnty = this.cartItems[index].attributes.quantity
    this.apiService.updateCartItem(id, updatedQnty, updateProduct)
    this.getTotalPrice();
  }

  decrement(id: number) {
    if (this.quantity >= 1) {
      const index = this.cartItems.findIndex((item: any) => item.id === id)
      this.cartItems[index].attributes.quantity -= 1
      const updateProduct = this.cartItems[index].attributes.product
      const updatedQnty = this.cartItems[index].attributes.quantity
      this.apiService.updateCartItem(id, updatedQnty, updateProduct)
      this.getTotalPrice();
    }
  }

  onCloseCart() {
    this.closeAddToCart.emit(false)
  }
}
