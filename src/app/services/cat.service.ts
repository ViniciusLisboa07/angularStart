import { Cat } from '../models/cat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://cat-fact.herokuapp.com"

  constructor(private http: HttpClient) { }

  list(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.baseUrl}/facts`);
  }

//   getById(id: number): Observable<Product> {
//     return this.http.get<Product>(`${this.baseUrl}/getbyid/${id}`);
//   }

//   create(product: Product) : Observable<Product> {
//     return this.http.post<Product>(`${this.baseUrl}/create`, product);
//   }
}