import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-single-item',
  templateUrl: './store-single-item.component.html',
  styleUrls: ['./store-single-item.component.css'],
})
export class StoreSingleItemComponent implements OnInit {
  params: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.params = activatedRoute.snapshot.params['pid'];
  }

  ngOnInit(): void {}
}
