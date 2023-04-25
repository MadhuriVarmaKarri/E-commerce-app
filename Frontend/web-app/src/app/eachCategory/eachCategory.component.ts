import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../common/services/api.service';
import { baseUrl } from '../environments/environment';

@Component({
  selector: 'app-eachCategory',
  templateUrl: './eachCategory.component.html',
  styleUrls: ['./eachCategory.component.css']
})
export class EachCategoryComponent implements OnInit {

  imgBaseUrl = baseUrl;
  catTitle: any;
  data: any;
  //  imgUrl: any;
  // prodName: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params;
      this.apiService.getEachCategory(id).subscribe((res: any) => {
        this.data = res.data
         console.log(this.data);
        this.catTitle = this.data[0].attributes.categories.data[0].attributes.title
        // this.data?.map((el: any) => {
        //   this.imgUrl = baseUrl + el.attributes.image.data.attributes.url
        //   console.log(el.attributes.image.data.attributes.name);
        //   this.prodName = el.attributes.image.data?.attributes.name
        // })
      })
    })
  }
}
