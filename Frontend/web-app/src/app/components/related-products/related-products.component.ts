import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() selectedProdId = new EventEmitter<number>();
  data: any;
  imgUrl = baseUrl;
  constructor(private apiService: ApiService){

  }

  ngOnChanges(simpleChange: SimpleChanges) {
    
    // if(simpleChange['categoryId'].currentValue) {
     // console.log((simpleChange));
      
      this.apiService.getRelatedproducts(this.productId,this.categoryId).subscribe((res:any)=>{
        this.data = res?.data  
     })
    // }
  }

  ngOnInit(): void {
  }
  onClickProduct(prodId: number){
     this.selectedProdId.emit(prodId);
  }
}
