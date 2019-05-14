import { ProductResolve } from './product/product.resolve';
import { ProductComponent } from './product/product.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FeedComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { item: ProductResolve }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
