import { Component, OnInit } from '@angular/core';
import { ProductRep } from 'src/app/models/Product.model';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  data: ProductRep[] = [];

  constructor(private service: StoreService) {}

  ngOnInit(): void {
    this.service.getPaginatedProducts().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
