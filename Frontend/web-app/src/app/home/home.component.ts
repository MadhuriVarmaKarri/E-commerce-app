import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService){}

  ngOnInit() {
     this.apiService.getProducts()
     .subscribe((res: any)=>{
      console.log(res);
      
     })
  }
}
