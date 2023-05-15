import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.apiService.getCategories().subscribe((res: any)=>{
      this.categories = res.data
    });
  }
  onClickCategory(id: any){
   // console.log(id);  
     localStorage.setItem('Itemid', id)
     this.router.navigate([`admin/categories/${id}`])
  }
}
