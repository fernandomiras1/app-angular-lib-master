import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
export var ComponentTypeButton = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
var ButtonTypeStyleMapping = new Map();
ButtonTypeStyleMapping.set(ComponentTypeButton.PRIMARY, 'z-btn-primary');
ButtonTypeStyleMapping.set(ComponentTypeButton.SECONDARY, 'z-btn-secondary');
ButtonTypeStyleMapping.set(ComponentTypeButton.STICKY, 'z-btn-sticky');
ButtonTypeStyleMapping.set(ComponentTypeButton.LINK, 'z-btn-link');
ButtonTypeStyleMapping.set(ComponentTypeButton.HEADER, 'z-btn-header');
var NGZButtonComponent = /** @class */ (function () {
    function NGZButtonComponent() {
        this.disabled = false;
        this.isLoading = false;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        this.clickButton = new EventEmitter();
        this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
        this.isBackground = true;
        this.isClicked = false;
    }
    Object.defineProperty(NGZButtonComponent.prototype, "type", {
        set: function (type) {
            switch (type) {
                case ComponentTypeButton.PRIMARY: {
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
                    // this.typeLoadingClass = ComponentTypeButton.PRIMARY;
                    this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                    break;
                }
                case ComponentTypeButton.SECONDARY: {
                    this.isBackground = false;
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.SECONDARY);
                    // this.typeLoadingClass = ComponentTypeButton.SECONDARY;
                    this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
                    break;
                }
                case ComponentTypeButton.STICKY: {
                    this.isBackground = true;
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.STICKY);
                    this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                    break;
                }
                case ComponentTypeButton.LINK: {
                    this.isBackground = false;
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.LINK);
                    this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
                    break;
                }
                case ComponentTypeButton.HEADER: {
                    this.isBackground = false;
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.HEADER);
                    this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                    break;
                }
                default: {
                    this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
                    // this.typeLoadingClass = ComponentTypeButton.PRIMARY;
                    this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    NGZButtonComponent.prototype.onButtonClicked = function () {
        if (!this.disabled) {
            this.clickButton.emit();
        }
    };
    __decorate([
        Input()
    ], NGZButtonComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], NGZButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NGZButtonComponent.prototype, "isLoading", void 0);
    __decorate([
        Input()
    ], NGZButtonComponent.prototype, "widthButton", void 0);
    __decorate([
        Output()
    ], NGZButtonComponent.prototype, "clickButton", void 0);
    __decorate([
        Input()
    ], NGZButtonComponent.prototype, "type", null);
    NGZButtonComponent = __decorate([
        Component({
            selector: 'lib-button',
            template: "<!-- zRippleEffect [backgroundColor]=\"backgroundRipple\" -->\n<button\n  class=\"z-btn {{typeButtonClass}}\"\n  [style.width]=\"widthButton\" [ngClass]=\"{'z-loading': isLoading}\" [disabled]=\"disabled\"\n  (click)=\"onButtonClicked()\">\n  <div [style.visibility]=\"isLoading ? 'hidden' : 'visible'\">{{ text }}</div>\n  <!-- <lib-loading class=\"z-btn-spinner\" *ngIf=\"isLoading\" [withBg]=\"isBackground\"\n  [type]=\"typeLoadingClass\" [size]=\"'medium'\"></lib-loading> -->\n</button>\n",
            styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-btn{-webkit-tap-highlight-color:transparent}.z-btn button::-moz-focus-inner{border:0}.z-btn.z-btn-header,.z-btn.z-btn-link,.z-btn.z-btn-primary,.z-btn.z-btn-secondary,.z-btn.z-btn-sticky{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header::before,.z-btn.z-btn-link::before,.z-btn.z-btn-primary::before,.z-btn.z-btn-secondary::before,.z-btn.z-btn-sticky::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header::after,.z-btn.z-btn-link::after,.z-btn.z-btn-primary::after,.z-btn.z-btn-secondary::after,.z-btn.z-btn-sticky::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header:focus,.z-btn.z-btn-header:hover,.z-btn.z-btn-link:focus,.z-btn.z-btn-link:hover,.z-btn.z-btn-primary:focus,.z-btn.z-btn-primary:hover,.z-btn.z-btn-secondary:focus,.z-btn.z-btn-secondary:hover,.z-btn.z-btn-sticky:focus,.z-btn.z-btn-sticky:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header:active::after,.z-btn.z-btn-link:active::after,.z-btn.z-btn-primary:active::after,.z-btn.z-btn-secondary:active::after,.z-btn.z-btn-sticky:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header:disabled,.z-btn.z-btn-link:disabled,.z-btn.z-btn-primary:disabled,.z-btn.z-btn-primary:disabled:hover,.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-sticky:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading,.z-btn.z-loading.z-btn-header,.z-btn.z-loading.z-btn-link,.z-btn.z-loading.z-btn-secondary,.z-btn.z-loading.z-btn-sticky{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header .z-btn-spinner,.z-btn.z-btn-link .z-btn-spinner,.z-btn.z-btn-primary .z-btn-spinner,.z-btn.z-btn-secondary .z-btn-spinner,.z-btn.z-btn-sticky .z-btn-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-secondary:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky:disabled,.z-btn.z-btn-sticky:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link:focus{box-shadow:none}.z-btn.z-btn-link:disabled,.z-btn.z-btn-link:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header:focus{box-shadow:none}.z-btn.z-btn-header:disabled,.z-btn.z-btn-header:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn .z-loading-spinner{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky{max-width:100%;width:100%}}.z-rippleEffect{border-radius:50%}"]
        })
    ], NGZButtonComponent);
    return NGZButtonComponent;
}());
export { NGZButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vc3JjL2NvbXBvbmVudHMvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRztJQUNqQyxPQUFPLEVBQUUsU0FBUztJQUNsQixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixJQUFNLHNCQUFzQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0FBQ3pELHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDekUsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdFLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdkUsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBT3ZFO0lBc0RFO1FBcERTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0Msb0JBQWUsR0FBRyxzQkFBc0IsQ0FBQyxH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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50VHlwZUJ1dHRvbiA9IHtcbiAgUFJJTUFSWTogJ3ByaW1hcnknLFxuICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknLFxuICBTVElDS1k6ICdzdGlja3knLFxuICBMSU5LOiAnbGluaycsXG4gIEhFQURFUjogJ2hlYWRlcidcbn07XG5cbmNvbnN0IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZLCAnei1idG4tcHJpbWFyeScpO1xuQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5TRUNPTkRBUlksICd6LWJ0bi1zZWNvbmRhcnknKTtcbkJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuc2V0KENvbXBvbmVudFR5cGVCdXR0b24uU1RJQ0tZLCAnei1idG4tc3RpY2t5Jyk7XG5CdXR0b25UeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlQnV0dG9uLkxJTkssICd6LWJ0bi1saW5rJyk7XG5CdXR0b25UeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlQnV0dG9uLkhFQURFUiwgJ3otYnRuLWhlYWRlcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5HWkJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHdpZHRoQnV0dG9uOiBzdHJpbmc7XG4gIGJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSc7XG4gIEBPdXRwdXQoKSBjbGlja0J1dHRvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlkpO1xuXG4gIHB1YmxpYyBpc0JhY2tncm91bmQgPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZOiB7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZKTtcbiAgICAgICAgLy8gdGhpcy50eXBlTG9hZGluZ0NsYXNzID0gQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wb25lbnRUeXBlQnV0dG9uLlNFQ09OREFSWToge1xuICAgICAgICB0aGlzLmlzQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uU0VDT05EQVJZKTtcbiAgICAgICAgLy8gdGhpcy50eXBlTG9hZGluZ0NsYXNzID0gQ29tcG9uZW50VHlwZUJ1dHRvbi5TRUNPTkRBUlk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMTAyLCAwLCAwLjMyKSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wb25lbnRUeXBlQnV0dG9uLlNUSUNLWToge1xuICAgICAgICB0aGlzLmlzQmFja2dyb3VuZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5TVElDS1kpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wb25lbnRUeXBlQnV0dG9uLkxJTks6IHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLkxJTkspO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDEwMiwgMCwgMC4zMiknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcG9uZW50VHlwZUJ1dHRvbi5IRUFERVI6IHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLkhFQURFUik7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZKTtcbiAgICAgICAgLy8gdGhpcy50eXBlTG9hZGluZ0NsYXNzID0gQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBpc0NsaWNrZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQnV0dG9uQ2xpY2tlZCgpIHtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGlja0J1dHRvbi5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=