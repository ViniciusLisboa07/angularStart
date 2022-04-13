import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  name!: string;
  description!: string;
  type!: string;
  price!: number;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    let product : Product = {
      name: this.name,
      description: this.description,
      type: this.type,
      price: this.price
    }

    this.productService.create(product).subscribe((product) => {
      this.router.navigate(["products"])
    }, (error) => {
      console.log(error)
    })
  }
}
