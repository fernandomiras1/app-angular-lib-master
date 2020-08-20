import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, AfterViewChecked, Output, EventEmitter } from '@angular/core';
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(element) {
        this.element = element;
        this.isShow = new EventEmitter();
        this.lastScrollTop = 0;
        this.navHeight = 0;
    }
    StickyHeaderDirective.prototype.ngAfterViewChecked = function () {
        this.navHeight = this.element.nativeElement.offsetHeight;
        document.body.style.marginTop = this.navHeight + "px";
    };
    StickyHeaderDirective.prototype.handleScroll = function () {
        // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
            this.isShow.emit(false);
        }
        else {
            this.isShow.emit(true);
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Output()
    ], StickyHeaderDirective.prototype, "isShow", void 0);
    __decorate([
        HostListener('window:scroll')
    ], StickyHeaderDirective.prototype, "handleScroll", null);
    StickyHeaderDirective = __decorate([
        Directive({
            selector: '[stickyHeader]'
        })
    ], StickyHeaderDirective);
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsidXRpbHMvZGlyZWN0aXZlcy9zdGlja3ktaGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBS3ZCO0lBS0UsK0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFIN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUNxQixDQUFDO0lBRTVDLGtEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBTSxJQUFJLENBQUMsU0FBUyxPQUFJLENBQUM7SUFDeEQsQ0FBQztJQUdELDRDQUFZLEdBQVo7UUFDRSxnRkFBZ0Y7UUFDaEYsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUUzRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEQsQ0FBQzs7Z0JBbEI0QixVQUFVOztJQUg3QjtRQUFULE1BQU0sRUFBRTt5REFBNkI7SUFXdEM7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDOzZEQVc3QjtJQXZCVSxxQkFBcUI7UUFIakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO09BQ1cscUJBQXFCLENBd0JqQztJQUFELDRCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3RpY2t5SGVhZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RpY2t5SGVhZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgQE91dHB1dCgpIGlzU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcbiAgcHJpdmF0ZSBuYXZIZWlnaHQgPSAwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdkhlaWdodCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblRvcCA9IGAke3RoaXMubmF2SGVpZ2h0fXB4YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgLy8gZWwgc2Nyb2xsVG9wIGNvbWluZXphIGVuIDAgbHVlZ28gdmEgYXVtZW50YW5kbyBhIG1lZGlkYSBxdWUgdmFtb3Mgc2Nyb2xsaWFuZG9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGlmIChzY3JvbGxUb3AgPiB0aGlzLmxhc3RTY3JvbGxUb3AgJiYgdGhpcy5uYXZIZWlnaHQgPCBzY3JvbGxUb3ApIHtcbiAgICAgIHRoaXMuaXNTaG93LmVtaXQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU2hvdy5lbWl0KHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3A7XG4gIH1cbn1cbiJdfQ==