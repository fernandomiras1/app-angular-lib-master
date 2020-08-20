import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
var NGZSliderControlComponent = /** @class */ (function () {
    function NGZSliderControlComponent() {
        this.disabled = false;
        this.valuesChange = new EventEmitter();
        this.CIRCLE_WIDTH = 20;
    }
    NGZSliderControlComponent.prototype.ngOnInit = function () {
        this.valueRange = this.min;
    };
    NGZSliderControlComponent.prototype.inputEvent = function (value) {
        this.valueRange = value;
        var widthLabel = this.label.nativeElement.offsetWidth;
        var widthInputPx = this.range.nativeElement.offsetWidth;
        var porcValue = ((value - this.min) * 100) / (this.max - this.min);
        this.posLineX = (widthInputPx / 100) * porcValue;
        var ballPercDiff = ((this.CIRCLE_WIDTH * 100) / widthInputPx) / 100;
        var pxValue = ((widthInputPx / 100) * (porcValue - (porcValue * ballPercDiff))) - ((widthLabel - this.CIRCLE_WIDTH) / 2);
        this.posX = pxValue >= 0 ? ((pxValue + widthLabel) > widthInputPx ? widthInputPx - widthLabel : pxValue) : 0;
    };
    NGZSliderControlComponent.prototype.onMouseUp = function (value) {
        if (value !== undefined) {
            this.valuesChange.emit(value);
        }
        else {
            this.valuesChange.emit(null);
        }
    };
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "min", void 0);
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "max", void 0);
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "step", void 0);
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "prefix", void 0);
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NGZSliderControlComponent.prototype, "title", void 0);
    __decorate([
        Output()
    ], NGZSliderControlComponent.prototype, "valuesChange", void 0);
    __decorate([
        ViewChild('range', { static: true })
    ], NGZSliderControlComponent.prototype, "range", void 0);
    __decorate([
        ViewChild('label', { static: true })
    ], NGZSliderControlComponent.prototype, "label", void 0);
    NGZSliderControlComponent = __decorate([
        Component({
            selector: 'lib-slider-control',
            template: "<div class=\"z-slider\" [ngClass]=\"{'z-slider--disabled': disabled}\">\n  <span class=\"z-slider__text-container__text\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ title }}</span>\n  <span [style.left.px]=\"posX\" #label class=\"z-slider__text-container__label\" \n    [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ prefix }}{{ valueRange }}\n  </span>\n\n  <div class=\"z-slider__container\">\n    <input #range type=\"range\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\" \n      (mouseup)=\"onMouseUp(range.value)\" value=\"0\" (input)=\"inputEvent(range.value)\" [disabled]=\"disabled\"\n      [step]=\"step\" [min]=\"min\" [max]=\"max\">\n\n    <span class=\"z-slider__container__progressLine\" [style.width.px]=\"posLineX\"></span>\n  </div>\n</div>\n",
            providers: [],
            styles: [":focus{outline:0}html{font-size:16px;height:100%}:host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}.z-slider,input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:20px;margin:9.5px 0;width:100%}.z-slider:focus,input[type=range]:focus{background:0 0;outline:0}.z-slider:disabled,input[type=range]:disabled{cursor:not-allowed;opacity:.4;pointer-events:none}.z-slider::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-runnable-track{background:#fec1a6;border:0 solid #000;height:2px;width:100%}.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{margin:0}}.z-slider::-webkit-slider-thumb :disabled,input[type=range]::-webkit-slider-thumb :disabled{cursor:not-allowed}.z-slider::-moz-range-track,input[type=range]::-moz-range-track{background:#fec1a6}.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{-moz-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;border:none;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{margin:0}}.z-slider::-ms-track,input[type=range]::-ms-track{background:#fec1a6;border:none;color:transparent}.z-slider::-ms-thumb,input[type=range]::-ms-thumb{appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:0 4px;width:20px;border:none}.z-slider::-ms-tooltip,input[type=range]::-ms-tooltip{display:none}.z-slider::-ms-fill-lower,input[type=range]::-ms-fill-lower{background:#fe5000;border-radius:4px}.z-slider{display:flex;flex-direction:column;height:102px;-webkit-tap-highlight-color:transparent;width:100%}.z-slider--disabled{cursor:not-allowed}.z-slider__container{align-items:center;display:flex;width:100%}.z-slider__container__progressLine{background:#fe5000;height:2px;position:absolute}.z-slider__text-container__text{color:#767676;font-size:1rem;line-height:1rem}.z-slider__text-container__label{color:#333;font-size:1.25rem;height:1rem;line-height:.4;margin-top:1.25rem;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}@supports (-ms-ime-align:auto){.z-slider::-ms-thumb,input[type=range]::-ms-thumb{margin:0}.z-slider__text-container__label{display:table}}.z-slider__text-container--disabled{color:#bbb}"]
        })
    ], NGZSliderControlComponent);
    return NGZSliderControlComponent;
}());
export { NGZSliderControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktenVtby8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xpZGVyLWNvbnRyb2wvc2xpZGVyLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUNoQixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBQTtRQU1XLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU9sRSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQXlCNUIsQ0FBQztJQXZCQyw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFFTSw4Q0FBVSxHQUFqQixVQUFrQixLQUFhO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNqRCxJQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdEUsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRU0sNkNBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQXJDUTtRQUFSLEtBQUssRUFBRTswREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFOzBEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7MkRBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs2REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTsrREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7NERBQWU7SUFDYjtRQUFULE1BQU0sRUFBRTttRUFBaUU7SUFFcEM7UUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs0REFBbUI7SUFDbEI7UUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs0REFBbUI7SUFYN0MseUJBQXlCO1FBUHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNnpCQUE4QztZQUU5QyxTQUFTLEVBQUUsRUFBRTs7U0FDZCxDQUFDO09BRVcseUJBQXlCLENBd0NyQztJQUFELGdDQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2xpZGVyLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXItY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTkdaU2xpZGVyQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByZWZpeDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgdmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3JhbmdlJywgeyBzdGF0aWM6IHRydWUgfSkgcmFuZ2U6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xhYmVsJywgeyBzdGF0aWM6IHRydWUgfSkgbGFiZWw6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBwb3NYOiBudW1iZXI7XG4gIHB1YmxpYyBwb3NMaW5lWDogbnVtYmVyO1xuICBwdWJsaWMgdmFsdWVSYW5nZTogbnVtYmVyO1xuICBwcml2YXRlIENJUkNMRV9XSURUSCA9IDIwO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVSYW5nZSA9IHRoaXMubWluO1xuICB9XG5cbiAgcHVibGljIGlucHV0RXZlbnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWVSYW5nZSA9IHZhbHVlO1xuICAgIGNvbnN0IHdpZHRoTGFiZWwgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgd2lkdGhJbnB1dFB4ID0gdGhpcy5yYW5nZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHBvcmNWYWx1ZSA9ICgodmFsdWUgLSB0aGlzLm1pbikgKiAxMDApIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHRoaXMucG9zTGluZVggPSAod2lkdGhJbnB1dFB4IC8gMTAwKSAqIHBvcmNWYWx1ZTtcbiAgICBjb25zdCBiYWxsUGVyY0RpZmYgPSAoKHRoaXMuQ0lSQ0xFX1dJRFRIICogMTAwKSAvIHdpZHRoSW5wdXRQeCkgLyAxMDA7XG5cbiAgICBjb25zdCBweFZhbHVlID0gKCh3aWR0aElucHV0UHggLyAxMDApICogKHBvcmNWYWx1ZSAtIChwb3JjVmFsdWUgKiBiYWxsUGVyY0RpZmYpKSkgLSAoKHdpZHRoTGFiZWwgLSB0aGlzLkNJUkNMRV9XSURUSCkgLyAyKTtcbiAgICB0aGlzLnBvc1ggPSBweFZhbHVlID49IDAgPyAoKHB4VmFsdWUgKyB3aWR0aExhYmVsKSA+IHdpZHRoSW5wdXRQeCA/IHdpZHRoSW5wdXRQeCAtIHdpZHRoTGFiZWwgOiBweFZhbHVlKSA6IDA7XG4gIH1cblxuICBwdWJsaWMgb25Nb3VzZVVwKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZXNDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iXX0=