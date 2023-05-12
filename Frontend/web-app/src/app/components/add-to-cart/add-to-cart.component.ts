import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AddToCartService } from 'src/app/common/services/add-to-cart.service';
import { ApiService } from 'src/app/common/services/api.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  quantity = 1;

  @Input() openAddToCart: any;
  @Output() closeAddToCart = new EventEmitter<boolean>();

  constructor(private apiService: ApiService) { }


  ngOnChanges() {
 
  }

  ngOnInit(): void {
    this.getAllCartItems()
  }

  getAllCartItems(){
    this.apiService.getCartItems().subscribe((res:any)=>{
      console.log(res.data);     
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

  onCloseCart() {
    this.closeAddToCart.emit(false)
  }
}
