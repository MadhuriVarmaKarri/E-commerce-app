import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{
quantity = 1;

@Input() openAddToCart: any;
@Output() closeAddToCart = new EventEmitter<boolean>();

ngOnInit(): void {
  
}

increment(){
  this.quantity = this.quantity+1;    
}

decrement(){
  if(this.quantity >= 1){
    this.quantity = this.quantity-1 
  }
}

onCloseCart(){
     this.closeAddToCart.emit(false)
  }
}
