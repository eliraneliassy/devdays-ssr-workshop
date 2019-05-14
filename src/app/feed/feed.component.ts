import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private feedService: FeedService, private router: Router) { }

  ngOnInit() {
    this.items$ = this.feedService.getFeed(0);
  }

  goToProduct(id: string) {
    this.router.navigateByUrl(`/product/${id}`);
  }

}
