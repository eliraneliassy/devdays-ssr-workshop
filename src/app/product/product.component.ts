import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.route.data.subscribe((res: any) => this.item = res.item);

    this.title.setTitle('My Awesome Website' + this.item.description);


    const fbTags = [];
    fbTags.push({ name: 'og:title', content: this.item.description });
    fbTags.push({ name: 'og:image', content: this.item.imageUrl });
    fbTags.push({ name: 'og:site_name', content: 'Fake MarketPlace' });
    fbTags.push({ name: 'og:description', content: this.item.description });

    this.meta.addTags(fbTags);


  }

}
