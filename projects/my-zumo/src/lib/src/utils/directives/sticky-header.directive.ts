import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewChecked,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[stickyHeader]'
})
export class StickyHeaderDirective implements AfterViewChecked {

  @Output() isShow = new EventEmitter();
  private lastScrollTop = 0;
  private navHeight = 0;
  constructor(private element: ElementRef) { }

  ngAfterViewChecked(): void {
    this.navHeight = this.element.nativeElement.offsetHeight;
    document.body.style.marginTop = `${this.navHeight}px`;
  }

  @HostListener('window:scroll')
  private handleScroll() {
    // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
      this.isShow.emit(false);
    } else {
      this.isShow.emit(true);
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
