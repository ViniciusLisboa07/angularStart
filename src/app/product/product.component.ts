import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: Product;
  productId!: number;

  constructor( private service: ProductService, private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  ngOnInit(): void {
    this.service.getById(this.productId).subscribe((product) => {
      this.product = product;
      console.log(this.product)
    })
  }

}
