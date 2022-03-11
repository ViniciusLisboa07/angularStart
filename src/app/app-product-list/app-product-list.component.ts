import { Cat } from '../models/cat';
import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/cat.service";

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.list().subscribe((cats) => {
      this.cats = cats;
      for (let cat of cats) {
          console.log(cat);
      }
  });
  }

}
