import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { baseUrl } from '../../environments/environment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
productId: any
data: any;
imgUrl = baseUrl;
cartItemnumber = 1;
constructor(private apiService: ApiService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
     this.route.params.subscribe((params: Params)=>{
      this.productId = params
      this.loadSingleProduct(this.productId.id)
     })
  }

  loadSingleProduct(id: number){
       this.apiService.getSingleProduct(id).subscribe((res:any)=>{
      //  console.log(res.data.id);
        this.data = res.data;
        this.productId = this.data?.attributes?.categories?.data[0]?.id
       })      
  }

  increment(){
    this.cartItemnumber = this.cartItemnumber+1;    
  }

  decrement(){
    if(this.cartItemnumber >= 1){
      this.cartItemnumber = this.cartItemnumber-1 
    }
  }
}
