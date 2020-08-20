import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, AfterViewChecked, Output, EventEmitter } from '@angular/core';
let StickyHeaderDirective = class StickyHeaderDirective {
    constructor(element) {
        this.element = element;
        this.isShow = new EventEmitter();
        this.lastScrollTop = 0;
        this.navHeight = 0;
    }
    ngAfterViewChecked() {
        this.navHeight = this.element.nativeElement.offsetHeight;
        document.body.style.marginTop = `${this.navHeight}px`;
    }
    handleScroll() {
        // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
            this.isShow.emit(false);
        }
        else {
            this.isShow.emit(true);
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
};
StickyHeaderDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { StickyHeaderDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsidXRpbHMvZGlyZWN0aXZlcy9zdGlja3ktaGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBS2hDLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFIN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUNxQixDQUFDO0lBRTVDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUdELFlBQVk7UUFDVixnRkFBZ0Y7UUFDaEYsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUUzRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEQsQ0FBQztDQUNGLENBQUE7O1lBbkI4QixVQUFVOztBQUg3QjtJQUFULE1BQU0sRUFBRTtxREFBNkI7QUFXdEM7SUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO3lEQVc3QjtBQXZCVSxxQkFBcUI7SUFIakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0dBQ1cscUJBQXFCLENBd0JqQztTQXhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzdGlja3lIZWFkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdGlja3lIZWFkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcblxuICBAT3V0cHV0KCkgaXNTaG93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGxhc3RTY3JvbGxUb3AgPSAwO1xuICBwcml2YXRlIG5hdkhlaWdodCA9IDA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMubmF2SGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luVG9wID0gYCR7dGhpcy5uYXZIZWlnaHR9cHhgO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcpXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAvLyBlbCBzY3JvbGxUb3AgY29taW5lemEgZW4gMCBsdWVnbyB2YSBhdW1lbnRhbmRvIGEgbWVkaWRhIHF1ZSB2YW1vcyBzY3JvbGxpYW5kb1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCAmJiB0aGlzLm5hdkhlaWdodCA8IHNjcm9sbFRvcCkge1xuICAgICAgdGhpcy5pc1Nob3cuZW1pdChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTaG93LmVtaXQodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcCA8PSAwID8gMCA6IHNjcm9sbFRvcDtcbiAgfVxufVxuIl19