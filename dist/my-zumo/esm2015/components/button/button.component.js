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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxNQUFNO0lBQ1osTUFBTSxFQUFFLFFBQVE7Q0FDakIsQ0FBQztBQUVGLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7QUFDekQsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN6RSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDN0Usc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25FLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFPdkUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFzRDdCO1FBcERTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0Msb0JBQWUsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsaUJBQVksR0FBRyxJQUFJLENBQUM7UUE2Q3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUE1Q0QsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNuQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSx1REFBdUQ7Z0JBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztnQkFDcEQsTUFBTTthQUNQO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRix5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztnQkFDbEQsTUFBTTthQUNQO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsMkJBQTJCLENBQUM7Z0JBQ3BELE1BQU07YUFDUDtZQUNELEtBQUssbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO2dCQUNsRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztnQkFDcEQsTUFBTTthQUNQO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9FLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDJCQUEyQixDQUFDO2FBQ3JEO1NBQ0Y7SUFDSCxDQUFDO0lBT0QsZUFBZTtRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQS9EVTtJQUFSLEtBQUssRUFBRTtnREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFO29EQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtxREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7dURBQXFCO0FBRW5CO0lBQVQsTUFBTSxFQUFFO3VEQUFrQztBQU0zQztJQURDLEtBQUssRUFBRTs4Q0F3Q1A7QUFuRFUsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDBmQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGtCQUFrQixDQWdFOUI7U0FoRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudFR5cGVCdXR0b24gPSB7XG4gIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5JyxcbiAgU1RJQ0tZOiAnc3RpY2t5JyxcbiAgTElOSzogJ2xpbmsnLFxuICBIRUFERVI6ICdoZWFkZXInXG59O1xuXG5jb25zdCBCdXR0b25UeXBlU3R5bGVNYXBwaW5nID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbkJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuc2V0KENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWSwgJ3otYnRuLXByaW1hcnknKTtcbkJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuc2V0KENvbXBvbmVudFR5cGVCdXR0b24uU0VDT05EQVJZLCAnei1idG4tc2Vjb25kYXJ5Jyk7XG5CdXR0b25UeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlQnV0dG9uLlNUSUNLWSwgJ3otYnRuLXN0aWNreScpO1xuQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5MSU5LLCAnei1idG4tbGluaycpO1xuQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5IRUFERVIsICd6LWJ0bi1oZWFkZXInKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOR1pCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSB3aWR0aEJ1dHRvbjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiknO1xuICBAT3V0cHV0KCkgY2xpY2tCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5QUklNQVJZKTtcblxuICBwdWJsaWMgaXNCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWToge1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWSk7XG4gICAgICAgIC8vIHRoaXMudHlwZUxvYWRpbmdDbGFzcyA9IENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcG9uZW50VHlwZUJ1dHRvbi5TRUNPTkRBUlk6IHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlQnV0dG9uQ2xhc3MgPSBCdXR0b25UeXBlU3R5bGVNYXBwaW5nLmdldChDb21wb25lbnRUeXBlQnV0dG9uLlNFQ09OREFSWSk7XG4gICAgICAgIC8vIHRoaXMudHlwZUxvYWRpbmdDbGFzcyA9IENvbXBvbmVudFR5cGVCdXR0b24uU0VDT05EQVJZO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDEwMiwgMCwgMC4zMiknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcG9uZW50VHlwZUJ1dHRvbi5TVElDS1k6IHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uU1RJQ0tZKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcG9uZW50VHlwZUJ1dHRvbi5MSU5LOiB7XG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5MSU5LKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAxMDIsIDAsIDAuMzIpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBvbmVudFR5cGVCdXR0b24uSEVBREVSOiB7XG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZUJ1dHRvbkNsYXNzID0gQnV0dG9uVHlwZVN0eWxlTWFwcGluZy5nZXQoQ29tcG9uZW50VHlwZUJ1dHRvbi5IRUFERVIpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSaXBwbGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLnR5cGVCdXR0b25DbGFzcyA9IEJ1dHRvblR5cGVTdHlsZU1hcHBpbmcuZ2V0KENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWSk7XG4gICAgICAgIC8vIHRoaXMudHlwZUxvYWRpbmdDbGFzcyA9IENvbXBvbmVudFR5cGVCdXR0b24uUFJJTUFSWTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmlwcGxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgaXNDbGlja2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XG4gIH1cblxuICBvbkJ1dHRvbkNsaWNrZWQoKSB7XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2tCdXR0b24uZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19