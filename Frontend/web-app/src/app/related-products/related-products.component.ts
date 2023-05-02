import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../common/services/api.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit{

  @Input() categoryId : any;
  data: any;
  constructor(private apiService: ApiService){

  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if(simpleChange['categoryId'].currentValue) {
      this.apiService.getEachCategory(this.categoryId).subscribe((res:any)=>{
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
