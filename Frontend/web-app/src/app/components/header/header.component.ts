import { Component } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openAddToCart: boolean = false;
  constructor(private authService: AuthService){}

  addToCart(){
    this.openAddToCart = true;
  }

  onCloseCart(isOpenCart: boolean){
    this.openAddToCart = isOpenCart
  }
  onLogout(){
    this.authService.logout()
  }
}
