import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRep } from '../models/Product.model';
import { AjaxResponse, ajax } from 'rxjs/ajax';

import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseUrl = 'https://fakestoreapis.com';

  constructor() {}

  getPaginatedProducts(): Subject<any> {
    const subject = new Subject();

    const data = ajax<ProductRep[]>(`${this.baseUrl}/products`).pipe(
      catchError((error) => {
        subject.error('Something went wrong. Please try again later.');
        return error;
      })
    );

    data.subscribe(subject);

    return subject;
  }
}
