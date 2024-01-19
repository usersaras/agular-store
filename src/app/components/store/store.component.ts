import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductRep } from 'src/app/models/Product.model';
import { AuthService } from 'src/app/service/auth.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  data: ProductRep[] = [];
  error: string = '';

  constructor(private service: StoreService) {}

  ngOnInit(): void {
    const sub = this.service.getPaginatedProducts();

    sub.subscribe({
      next: (res) => {
        this.data = res.response;
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });

    sub.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });
  }
}
