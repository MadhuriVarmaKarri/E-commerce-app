import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-each-cat-products',
  templateUrl: './each-cat-products.component.html',
  styleUrls: ['./each-cat-products.component.css']
})
export class EachCatProductsComponent implements OnInit{
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params;
      console.log(id);
      
    })
  }
}
