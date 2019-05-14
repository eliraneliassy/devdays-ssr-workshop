import { Directive, Inject, PLATFORM_ID, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appSsrRendering]'
})
export class SsrRenderingDirective implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private pltaformId,
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    if (isPlatformServer(this.pltaformId)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
