import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((res: any) => this.item = res.item);
  }

}
