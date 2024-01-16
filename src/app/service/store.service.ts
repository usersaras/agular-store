import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRep } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseUrl = 'https://fakestoreapi.com';

  constructor(private httpSerive: HttpClient) {}

  getPaginatedProducts(): Observable<ProductRep[]> {
    return this.httpSerive.get<ProductRep[]>(`${this.baseUrl}/products`);
  }
}
