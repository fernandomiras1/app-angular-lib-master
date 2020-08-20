import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "z-loading": a0 }; };
const ComponentTypeButton = {
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
NGZButtonComponent.ɵfac = function NGZButtonComponent_Factory(t) { return new (t || NGZButtonComponent)(); };
NGZButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZButtonComponent, selectors: [["lib-button"]], inputs: { disabled: "disabled", isLoading: "isLoading", type: "type", text: "text", widthButton: "widthButton" }, outputs: { clickButton: "clickButton" }, decls: 3, vars: 12, consts: [[3, "ngClass", "disabled", "click"]], template: function NGZButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NGZButtonComponent_Template_button_click_0_listener() { return ctx.onButtonClicked(); });
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("z-btn ", ctx.typeButtonClass, "");
        ɵngcc0.ɵɵstyleProp("width", ctx.widthButton);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c0, ctx.isLoading))("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("visibility", ctx.isLoading ? "hidden" : "visible");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.text);
    } }, directives: [ɵngcc1.NgClass], styles: ["[_ngcontent-%COMP%]:focus{outline:0}html[_ngcontent-%COMP%]{font-size:16px;height:100%}.z-btn[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}.z-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.z-btn.z-btn-header[_ngcontent-%COMP%], .z-btn.z-btn-link[_ngcontent-%COMP%], .z-btn.z-btn-primary[_ngcontent-%COMP%], .z-btn.z-btn-secondary[_ngcontent-%COMP%], .z-btn.z-btn-sticky[_ngcontent-%COMP%]{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header[_ngcontent-%COMP%]::before, .z-btn.z-btn-link[_ngcontent-%COMP%]::before, .z-btn.z-btn-primary[_ngcontent-%COMP%]::before, .z-btn.z-btn-secondary[_ngcontent-%COMP%]::before, .z-btn.z-btn-sticky[_ngcontent-%COMP%]::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header[_ngcontent-%COMP%]::after, .z-btn.z-btn-link[_ngcontent-%COMP%]::after, .z-btn.z-btn-primary[_ngcontent-%COMP%]::after, .z-btn.z-btn-secondary[_ngcontent-%COMP%]::after, .z-btn.z-btn-sticky[_ngcontent-%COMP%]::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header[_ngcontent-%COMP%]:focus, .z-btn.z-btn-header[_ngcontent-%COMP%]:hover, .z-btn.z-btn-link[_ngcontent-%COMP%]:focus, .z-btn.z-btn-link[_ngcontent-%COMP%]:hover, .z-btn.z-btn-primary[_ngcontent-%COMP%]:focus, .z-btn.z-btn-primary[_ngcontent-%COMP%]:hover, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:focus, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:hover, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:focus, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-link[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-primary[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-link[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-primary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-primary[_ngcontent-%COMP%]:disabled:hover, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-header[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-link[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-secondary[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-sticky[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-link[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-primary[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-secondary[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-sticky[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky[_ngcontent-%COMP%]{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link[_ngcontent-%COMP%]{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link[_ngcontent-%COMP%]:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link[_ngcontent-%COMP%]:focus{box-shadow:none}.z-btn.z-btn-link[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-link[_ngcontent-%COMP%]:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header[_ngcontent-%COMP%]{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header[_ngcontent-%COMP%]:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header[_ngcontent-%COMP%]:focus{box-shadow:none}.z-btn.z-btn-header[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-header[_ngcontent-%COMP%]:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn[_ngcontent-%COMP%]   .z-loading-spinner[_ngcontent-%COMP%]{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky[_ngcontent-%COMP%]{max-width:100%;width:100%}}.z-rippleEffect[_ngcontent-%COMP%]{border-radius:50%}"] });
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

// import { NGZLoadingModule } from 'my-zumo';
let NGZButtonModule = class NGZButtonModule {
};
NGZButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZButtonModule });
NGZButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZButtonModule_Factory(t) { return new (t || NGZButtonModule)(); }, imports: [[
            CommonModule,
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                template: "<!-- zRippleEffect [backgroundColor]=\"backgroundRipple\" -->\n<button\n  class=\"z-btn {{typeButtonClass}}\"\n  [style.width]=\"widthButton\" [ngClass]=\"{'z-loading': isLoading}\" [disabled]=\"disabled\"\n  (click)=\"onButtonClicked()\">\n  <div [style.visibility]=\"isLoading ? 'hidden' : 'visible'\">{{ text }}</div>\n  <!-- <lib-loading class=\"z-btn-spinner\" *ngIf=\"isLoading\" [withBg]=\"isBackground\"\n  [type]=\"typeLoadingClass\" [size]=\"'medium'\"></lib-loading> -->\n</button>\n",
                styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-btn{-webkit-tap-highlight-color:transparent}.z-btn button::-moz-focus-inner{border:0}.z-btn.z-btn-header,.z-btn.z-btn-link,.z-btn.z-btn-primary,.z-btn.z-btn-secondary,.z-btn.z-btn-sticky{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header::before,.z-btn.z-btn-link::before,.z-btn.z-btn-primary::before,.z-btn.z-btn-secondary::before,.z-btn.z-btn-sticky::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header::after,.z-btn.z-btn-link::after,.z-btn.z-btn-primary::after,.z-btn.z-btn-secondary::after,.z-btn.z-btn-sticky::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header:focus,.z-btn.z-btn-header:hover,.z-btn.z-btn-link:focus,.z-btn.z-btn-link:hover,.z-btn.z-btn-primary:focus,.z-btn.z-btn-primary:hover,.z-btn.z-btn-secondary:focus,.z-btn.z-btn-secondary:hover,.z-btn.z-btn-sticky:focus,.z-btn.z-btn-sticky:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header:active::after,.z-btn.z-btn-link:active::after,.z-btn.z-btn-primary:active::after,.z-btn.z-btn-secondary:active::after,.z-btn.z-btn-sticky:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header:disabled,.z-btn.z-btn-link:disabled,.z-btn.z-btn-primary:disabled,.z-btn.z-btn-primary:disabled:hover,.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-sticky:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading,.z-btn.z-loading.z-btn-header,.z-btn.z-loading.z-btn-link,.z-btn.z-loading.z-btn-secondary,.z-btn.z-loading.z-btn-sticky{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header .z-btn-spinner,.z-btn.z-btn-link .z-btn-spinner,.z-btn.z-btn-primary .z-btn-spinner,.z-btn.z-btn-secondary .z-btn-spinner,.z-btn.z-btn-sticky .z-btn-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-secondary:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky:disabled,.z-btn.z-btn-sticky:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link:focus{box-shadow:none}.z-btn.z-btn-link:disabled,.z-btn.z-btn-link:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header:focus{box-shadow:none}.z-btn.z-btn-header:disabled,.z-btn.z-btn-header:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn .z-loading-spinner{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky{max-width:100%;width:100%}}.z-rippleEffect{border-radius:50%}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], clickButton: [{
            type: Output
        }], type: [{
            type: Input
        }], text: [{
            type: Input
        }], widthButton: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZButtonModule, { declarations: function () { return [NGZButtonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NGZButtonComponent
                ],
                exports: [
                    NGZButtonComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentTypeButton, NGZButtonComponent, NGZButtonModule };

//# sourceMappingURL=my-zumo-src-components-button.js.map