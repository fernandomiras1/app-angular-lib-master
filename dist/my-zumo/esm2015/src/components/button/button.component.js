import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
export const ComponentTypeButton = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
const ButtonTypeStyleMapping = new Map();
ButtonTypeStyleMapping.set(ComponentTypeButton.PRIMARY, 'z-btn-primary');
ButtonTypeStyleMapping.set(ComponentTypeButton.SECONDARY, 'z-btn-secondary');
ButtonTypeStyleMapping.set(ComponentTypeButton.STICKY, 'z-btn-sticky');
ButtonTypeStyleMapping.set(ComponentTypeButton.LINK, 'z-btn-link');
ButtonTypeStyleMapping.set(ComponentTypeButton.HEADER, 'z-btn-header');
let NGZButtonComponent = class NGZButtonComponent {
    constructor() {
        this.disabled = false;
        this.isLoading = false;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        this.clickButton = new EventEmitter();
        this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
        this.isBackground = true;
        this.isClicked = false;
    }
    set type(type) {
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
    }
    onButtonClicked() {
        if (!this.disabled) {
            this.clickButton.emit();
        }
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
export { NGZButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vc3JjL2NvbXBvbmVudHMvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQyxPQUFPLEVBQUUsU0FBUztJQUNsQixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixNQUFNLHNCQUFzQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0FBQ3pELHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDekUsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdFLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdkUsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBT3ZFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBc0Q3QjtRQXBEUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFM0IscUJBQWdCLEdBQUcsMkJBQTJCLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFD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dCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRUeXBlQnV0dG9uID0ge1xuICBQUklNQVJZOiAncHJpbWFyeScsXG4gIFNFQ09OREFSWTogJ3NlY29uZGFyeScsXG4gIFNUSUNLWTogJ3N0aWNreScsXG4gIExJTks6ICdsaW5rJyxcbiAgSEVBREVSOiAnaGVhZGVyJ1xufTtcblxuY29uc3QgQnV0dG9uVHlwZVN0eWxlTWFwcGluZyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5CdXR0b25UeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlksICd6LWJ0bi1wcmltYXJ5Jyk7XG5CdXR0b25UeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlQnV0dG9uLlNFQ09OREFSWSwgJ3otYnRuLXNlY29uZGFyeScpO1xuQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5TVElDS1ksICd6LWJ0bi1zdGlja3knKTtcbkJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuc2V0KENvbXBvbmVudFR5cGVCdXR0b24uTElOSywgJ3otYnRuLWxpbmsnKTtcbkJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuc2V0KENvbXBvbmVudFR5cGVCdXR0b24uSEVBREVSLCAnei1idG4taGVhZGVyJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTkdaQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgd2lkdGhCdXR0b246IHN0cmluZztcbiAgYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpJztcbiAgQE91dHB1dCgpIGNsaWNrQnV0dG9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWSk7XG5cbiAgcHVibGljIGlzQmFja2dyb3VuZCA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlk6IHtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlkpO1xuICAgICAgICAvLyB0aGlzLnR5cGVMb2FkaW5nQ2xhc3MgPSBDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBvbmVudFR5cGVCdXR0b24uU0VDT05EQVJZOiB7XG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5TRUNPTkRBUlkpO1xuICAgICAgICAvLyB0aGlzLnR5cGVMb2FkaW5nQ2xhc3MgPSBDb21wb25lbnRUeXBlQnV0dG9uLlNFQ09OREFSWTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAxMDIsIDAsIDAuMzIpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBvbmVudFR5cGVCdXR0b24uU1RJQ0tZOiB7XG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLlNUSUNLWSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBvbmVudFR5cGVCdXR0b24uTElOSzoge1xuICAgICAgICB0aGlzLmlzQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uTElOSyk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMTAyLCAwLCAwLjMyKSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wb25lbnRUeXBlQnV0dG9uLkhFQURFUjoge1xuICAgICAgICB0aGlzLmlzQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uSEVBREVSKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlkpO1xuICAgICAgICAvLyB0aGlzLnR5cGVMb2FkaW5nQ2xhc3MgPSBDb21wb25lbnRUeXBlQnV0dG9uLlBSSU1BUlk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJpcHBsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIGlzQ2xpY2tlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25CdXR0b25DbGlja2VkKCkge1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsaWNrQnV0dG9uLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==