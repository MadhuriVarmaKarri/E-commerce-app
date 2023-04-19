import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/services/api.service';
import { baseUrl } from 'src/app/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any
  imgUrl = baseUrl;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.apiService.getCategories().subscribe((res: any)=>{
      console.log(res.data);
      this.categories = res.data
    });
  }
}
