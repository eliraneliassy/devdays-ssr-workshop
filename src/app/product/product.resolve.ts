import { FeedService } from './../feed.service';
import { Item } from './../item';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductResolve implements Resolve<Item> {
    constructor(private feedService: FeedService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Item> {
            debugger
        const productId = route.params['id'];
        return this.feedService.getFeed().pipe(
            map(x => x.find(item => item._id === productId))
        );
    }

}
