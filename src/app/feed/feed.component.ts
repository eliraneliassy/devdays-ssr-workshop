import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.items$ = this.feedService.getFeed(0);
  }

}
