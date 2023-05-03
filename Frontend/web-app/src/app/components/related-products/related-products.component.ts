import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { baseUrl } from 'src/app/environments/environment';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit{

  @Input() categoryId : any;
  @Input() productId : any;
  data: any;
  imgUrl = baseUrl;
  constructor(private apiService: ApiService){

  }

  ngOnChanges(simpleChange: SimpleChanges) {
    //console.log(this.productId,this.categoryId);
    
    if(simpleChange['categoryId'].currentValue) {
      this.apiService.getRelatedproducts(this.productId,this.categoryId).subscribe((res:any)=>{
        this.data = res?.data  
        console.log(this.data);
     })
    }
  }

  ngOnInit(): void {
  }
  callEachCategory(id:number){
    
  }
}
