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
quantity = 1;
latestQnty!: number;
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
    this.quantity = this.quantity+1;    
  }

  decrement(){
    if(this.quantity >= 1){
      this.quantity = this.quantity-1 
    }
  }

  onAddToCart(qnty : number){
     this.data.attributes.quantity = qnty
     this.latestQnty =  this.data.attributes.quantity
     console.log(this.data, this.latestQnty);
     this.quantity = 1
  }
}
