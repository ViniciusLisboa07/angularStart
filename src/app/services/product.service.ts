import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

//   getById(id: number): Observable<Product> {
//     return this.http.get<Product>(`${this.baseUrl}/getbyid/${id}`);
//   }

//   create(product: Product) : Observable<Product> {
//     return this.http.post<Product>(`${this.baseUrl}/create`, product);
//   }
}