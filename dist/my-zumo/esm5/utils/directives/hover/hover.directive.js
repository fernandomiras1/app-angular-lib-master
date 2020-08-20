import { __decorate, __values } from "tslib";
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DocumentService } from '../../services/document/document.service';
var ZHoverDirective = /** @class */ (function () {
    function ZHoverDirective(el, renderer, documentService) {
        this.el = el;
        this.renderer = renderer;
        this.documentService = documentService;
        this.isHover = false;
        this.stylesEnter = [];
        this.stylesLeave = [];
        this.breakpointMinWithoutStyles = 0;
        this.style = {};
        this.calculateWidthViewport();
    }
    ZHoverDirective.prototype.calculateWidthViewport = function () {
        this.widthViewport = this.documentService.nativeDocument.body.offsetWidth;
    };
    ZHoverDirective.prototype.ngOnInit = function () {
        this.style = getComputedStyle(this.el.nativeElement);
        this.width = this.westernArabicNumeralsOnly(this.style.width);
    };
    ZHoverDirective.prototype.onMouseEnter = function () {
        var e_1, _a;
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            try {
                for (var _b = __values(this.stylesEnter), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var style = _c.value;
                    this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    ZHoverDirective.prototype.onMouseLeave = function () {
        var e_2, _a;
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            try {
                for (var _b = __values(this.stylesLeave), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var style = _c.value;
                    this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    ZHoverDirective.prototype.westernArabicNumeralsOnly = function (style) {
        return style.match(/\d+/g).map(Number)[0];
    };
    ZHoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DocumentService }
    ]; };
    __decorate([
        Input()
    ], ZHoverDirective.prototype, "isHover", void 0);
    __decorate([
        Input()
    ], ZHoverDirective.prototype, "stylesEnter", void 0);
    __decorate([
        Input()
    ], ZHoverDirective.prototype, "stylesLeave", void 0);
    __decorate([
        Input()
    ], ZHoverDirective.prototype, "breakpointMinWithoutStyles", void 0);
    __decorate([
        HostListener('mouseenter')
    ], ZHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave')
    ], ZHoverDirective.prototype, "onMouseLeave", null);
    ZHoverDirective = __decorate([
        Directive({
            selector: '[zHover]'
        })
    ], ZHoverDirective);
    return ZHoverDirective;
}());
export { ZHoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktenVtby8iLCJzb3VyY2VzIjpbInV0aWxzL2RpcmVjdGl2ZXMvaG92ZXIvaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSzNFO0lBVUUseUJBQW1CLEVBQWMsRUFBUyxRQUFtQixFQUFVLGVBQWdDO1FBQXBGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUjlGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsK0JBQTBCLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFLZCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVFLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUUyQixzQ0FBWSxHQUFaOztRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLDBCQUEwQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTs7Z0JBQ3JILEtBQW9CLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxXQUFXLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWpDLElBQU0sS0FBSyxXQUFBO29CQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6RTs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDO0lBRTJCLHNDQUFZLEdBQVo7O1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsMEJBQTBCLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFOztnQkFDckgsS0FBb0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBakMsSUFBTSxLQUFLLFdBQUE7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pFOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7SUFFRCxtREFBeUIsR0FBekIsVUFBMEIsS0FBYTtRQUNyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQS9Cc0IsVUFBVTtnQkFBbUIsU0FBUztnQkFBMkIsZUFBZTs7SUFSOUY7UUFBUixLQUFLLEVBQUU7b0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO3dEQUF5QjtJQUN4QjtRQUFSLEtBQUssRUFBRTt3REFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7dUVBQWdDO0lBa0JaO1FBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7dURBTTFCO0lBRTJCO1FBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7dURBTTFCO0lBckNVLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztPQUNXLGVBQWUsQ0EwQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZG9jdW1lbnQvZG9jdW1lbnQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t6SG92ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBaSG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzSG92ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3R5bGVzRW50ZXI6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHN0eWxlc0xlYXZlOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBicmVha3BvaW50TWluV2l0aG91dFN0eWxlcyA9IDA7XG4gIHN0eWxlOiBhbnkgPSB7fTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgd2lkdGhWaWV3cG9ydDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZG9jdW1lbnRTZXJ2aWNlOiBEb2N1bWVudFNlcnZpY2UpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVdpZHRoVmlld3BvcnQoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVdpZHRoVmlld3BvcnQoKTogdm9pZCB7XG4gICAgdGhpcy53aWR0aFZpZXdwb3J0ID0gdGhpcy5kb2N1bWVudFNlcnZpY2UubmF0aXZlRG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMud2VzdGVybkFyYWJpY051bWVyYWxzT25seSh0aGlzLnN0eWxlLndpZHRoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNIb3ZlciAmJiB0aGlzLmJyZWFrcG9pbnRNaW5XaXRob3V0U3R5bGVzICE9PSBudWxsICYmIHRoaXMud2lkdGhWaWV3cG9ydCA+PSB0aGlzLmJyZWFrcG9pbnRNaW5XaXRob3V0U3R5bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHRoaXMuc3R5bGVzRW50ZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLnN0eWxlLCBzdHlsZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5pc0hvdmVyICYmIHRoaXMuYnJlYWtwb2ludE1pbldpdGhvdXRTdHlsZXMgIT09IG51bGwgJiYgdGhpcy53aWR0aFZpZXdwb3J0ID49IHRoaXMuYnJlYWtwb2ludE1pbldpdGhvdXRTdHlsZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2YgdGhpcy5zdHlsZXNMZWF2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgc3R5bGUuc3R5bGUsIHN0eWxlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3ZXN0ZXJuQXJhYmljTnVtZXJhbHNPbmx5KHN0eWxlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHlsZS5tYXRjaCgvXFxkKy9nKS5tYXAoTnVtYmVyKVswXTtcbiAgfVxufVxuIl19