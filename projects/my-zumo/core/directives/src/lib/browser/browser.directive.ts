import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { WindowService } from '@zumo/core/services';
import { ZBrowser } from '@zumo/core/utils';

@Directive({
  selector: '[zBrowser]'
})
export class ZBrowserDirective {
  constructor(private renderer: Renderer2, private element: ElementRef, private windowService: WindowService) {
    const browser = new ZBrowser(this.windowService);
    this.renderer.addClass(element.nativeElement, `browser-${browser.getBrowser()}`);
  }
}
