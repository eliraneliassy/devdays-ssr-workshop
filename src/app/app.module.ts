import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product/product.component';
import { ProductResolve } from './product/product.resolve';
import { SsrNoRenderingDirective } from './ssr-no-rendering.directive';
import { SsrRenderingDirective } from './ssr-rendering.directive';
import { ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HeaderComponent,
    ItemComponent,
    ProductComponent,
    SsrNoRenderingDirective,
    SsrRenderingDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ServerTransferStateModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
