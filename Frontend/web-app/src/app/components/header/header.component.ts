import { ChangeDetectorRef, Component, OnInit, SimpleChange } from '@angular/core';
import { AddToCartService } from 'src/app/common/services/add-to-cart.service';
import { ApiService } from 'src/app/common/services/api.service';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: any = 0;
  latestcount: any;
  openAddToCart: boolean = false;

  constructor(private authService: AuthService,
    private apiService: ApiService,
    private addToCartService: AddToCartService
  ) { }


  ngOnchanges() {
    //  this.getCartQuantity()
  }

  ngOnInit(): void {
    //to get initial count from api
    this.apiService.getCartItems().subscribe((res: any) => {
      console.log(res);
     // this.count = res;
      this.count = res.data?.reduce((acc:number , el : any ) => {
        return acc + el.attributes?.quantity
    }, 0);
    console.log( this.count);
    })
    
    //to get updated count from singleproduct comp
    this.apiService.quantity.subscribe((res) => {
      console.log(this.count);
      
     this.count = res
      console.log(this.count);
    })
  }

  getCartQuantity() {

  }

  addToCart() {
    this.openAddToCart = true;
  }

  onCloseCart(isOpenCart: boolean) {
    this.openAddToCart = isOpenCart
  }
  onLogout() {
    this.authService.logout()
  }
}
