import { Product } from '../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.list().subscribe((products) => {
      this.products = products;
      console.log(this.products)
      for (let product of products) {
        console.log(products);
        console.log('=-=-=');
      }
  });
  }

}
