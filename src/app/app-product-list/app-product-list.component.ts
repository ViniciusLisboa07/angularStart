import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

  products2!: Array<any>; 

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products2 = this.service.list()
    console.log(this.products2)
  }

}
