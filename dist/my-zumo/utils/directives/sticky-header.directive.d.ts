import { ElementRef, AfterViewChecked, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class StickyHeaderDirective implements AfterViewChecked {
    private element;
    isShow: EventEmitter<any>;
    private lastScrollTop;
    private navHeight;
    constructor(element: ElementRef);
    ngAfterViewChecked(): void;
    handleScroll(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StickyHeaderDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<StickyHeaderDirective, "[stickyHeader]", never, {}, { "isShow": "isShow"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RpY2t5SGVhZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIGlzU2hvdzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wO1xuICAgIHByaXZhdGUgbmF2SGVpZ2h0O1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkO1xuICAgIGhhbmRsZVNjcm9sbCgpOiB2b2lkO1xufVxuIl19