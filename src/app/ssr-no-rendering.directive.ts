import { Directive, OnInit, Inject, PLATFORM_ID, ViewContainerRef, TemplateRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appSsrNoRendering]'
})
export class SsrNoRenderingDirective implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private pltaformId,
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    if (!isPlatformServer(this.pltaformId)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
