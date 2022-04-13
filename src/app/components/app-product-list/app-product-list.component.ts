import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from "../../services/product.service";

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
    });
  }

}
